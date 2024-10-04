import express from 'express';
import { User } from '../models/user.model';
import { register, login } from '../controllers/user.controller';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);

userRouter.get('/user/:id', (req, res) => {
  // const user = User.getUserById(1);
  // res.status(200).json({ data: user });
});

export { userRouter };
