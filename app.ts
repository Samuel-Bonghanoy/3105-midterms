import express from 'express';
import { userRouter } from './routes/user.route';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
