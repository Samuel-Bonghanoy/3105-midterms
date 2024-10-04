import express from 'express';
import { User } from '../models/user.model';

const userRouter = express.Router();

userRouter.get('/user/:id', (req, res) => {
  const user = User.getUserById(1);

  res.status(200).json({ data: user });
});

export { userRouter };
