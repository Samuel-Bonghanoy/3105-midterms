import express from 'express';
import { userRouter } from './routes/user.route';
import { env } from './config/env';
import { loggerMiddleware } from './middleware/loggerMiddleware';

const app = express();

app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
