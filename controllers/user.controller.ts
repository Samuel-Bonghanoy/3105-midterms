import Joi from 'joi';
import { genSalt, hash, compare } from 'bcrypt';
import { User } from '../models/user.model';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request, Response } from 'express';

export async function register(req: Request, res: Response) {
  const userSchema = Joi.object({
    username: Joi.string().alphanum().max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'org'] },
    }),
  });

  const { error, value } = await userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ msg: error.message });
  } else {
    const { username, password, email } = value;

    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);

    const newUser = User.createUser(username, hashedPassword, email);

    return res.status(200).json({
      msg: 'You have successfully created an account.',
      data: newUser,
    });
  }
}
