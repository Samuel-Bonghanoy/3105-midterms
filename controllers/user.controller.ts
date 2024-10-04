import Joi from 'joi';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import { User } from '../models/user.model';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import type { Request, Response } from 'express';
import { env } from '../config/env';

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

export function login(req: Request, res: Response) {
  const loginSchema = Joi.object({
    username: Joi.string().alphanum().max(30).required(),
    password: Joi.string().required(),
  });

  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    res.status(400).json({ msg: error.message });
  } else {
    const { username, password, email } = value;

    const queriedUserDetails = User.findUserByUsername(username);

    if (!queriedUserDetails) {
      res.status(400).json({ msg: `Username ${username} not found!` });
      return;
    }

    if (!compareSync(password, queriedUserDetails.password)) {
      res.status(400).json({ msg: 'Incorrect password. Please try again!' });
      return;
    }

    const token = jwt.sign(
      {
        id: queriedUserDetails.id,
        username: queriedUserDetails.username,
        email: queriedUserDetails.email,
      },
      env.JWT_SECRET,
    );

    res.status(200).json({ message: 'Login successful!', data: token });
  }
}
