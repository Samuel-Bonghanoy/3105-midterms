import Joi from 'joi';
import { genSaltSync, hashSync, compare } from 'bcrypt';
import { User } from '../models/user.model';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import type { Request, Response } from 'express';

export function register(req: Request, res: Response) {
  const userSchema = Joi.object({
    username: Joi.string().alphanum().max(30).required(),
    password: Joi.string().required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'org'] },
      })
      .required(),
  });

  const { error, value } = userSchema.validate(req.body);

  if (error) {
    res.status(400).json({ msg: error.message });
  } else {
    const { username, password, email } = value;

    const salt = genSaltSync();
    const hashedPassword = hashSync(password, salt);

    const newUser = User.createUser(username, hashedPassword, email);

    res.json({
      msg: 'You have successfully created an account.',
      data: newUser,
    });
  }
}
