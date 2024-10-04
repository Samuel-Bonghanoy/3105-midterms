import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const method = req.method;
  const route = req.url;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${route}`);

  next();
};
