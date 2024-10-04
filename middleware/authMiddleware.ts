import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>

    jwt.verify(token, env.JWT_SECRET, (err, payload) => {
      if (err) {
        res.status(403).json({
          success: false,
          message: 'The token provided is invalid',
        });
        return;
      } else {
        res.locals.decodedToken = payload;
        next();
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'No token was provided',
    });
  }
}
