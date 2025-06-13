import express from 'express';
import remindersRouter from './routers/reminders';
const app = express();

app.use(express.json());
app.use('/reminders',remindersRouter);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

