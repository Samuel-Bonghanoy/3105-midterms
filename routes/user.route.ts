import express from 'express';
import { register, login, findUser } from '../controllers/user.controller';
import { authMiddleware } from '../middleware/authMiddleware';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile', authMiddleware, findUser);

export { userRouter };
