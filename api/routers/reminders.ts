import { Router } from 'express';
import Reminder from '../models/reminder';
import type CreateReminderDto from '../models/reminders';
import InMemoryDatabase from '../storage/InMemoryDatabase';

const remindersRouter = Router();

remindersRouter.get('/', (req, res) => {
  const reminders = InMemoryDatabase.getReminders();
  res.json(reminders);
});

remindersRouter.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  InMemoryDatabase.addReminder(reminder);
  res.json(reminder);
});

remindersRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const reminder = InMemoryDatabase.getReminder(id);
  res.json(reminder);
});

export default remindersRouter;