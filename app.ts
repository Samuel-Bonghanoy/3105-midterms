import express from 'express';
import { userRouter } from './routes/user.route';
import { env } from './config/env';
import { loggerMiddleware } from './middleware/loggerMiddleware';
import { rateLimitMiddleware } from './middleware/rateLimitMiddleware';

const app = express();

// MIDDLEWARE
// app.use(rateLimitMiddleware);
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/', userRouter);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
