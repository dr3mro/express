import express from 'express';
import remindersRouter from './routers/reminders';

const app = express();

app.use(express.json());
app.use('/reminders', remindersRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the Reminders API!');
});
module.exports = app;