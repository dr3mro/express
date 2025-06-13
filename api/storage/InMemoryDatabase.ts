import Reminder from "../models/reminder";

class InMemoryDatabase {
    private static reminders: Reminder[] = [];
    static getReminders(): Reminder[] {
        return this.reminders;
    }
    static addReminder(reminder: Reminder): void {
        this.reminders.push(reminder);
    }
    static removeReminder(id: number): void {
        this.reminders = this.reminders.filter(reminder => reminder.id !== id);
    }
    static updateReminder(id: number, title: string): void {
        const reminder = this.reminders.find(reminder => reminder.id === id);
        if (reminder) {
            reminder.title = title;
        }
    }
    static completeReminder(id: number): void {
        const reminder = this.reminders.find((reminder: { id: number; }) => reminder.id === id);
        if (reminder) {
            reminder.isComplete = true;
        }
    }
    static decompleteReminder(id: number): void {
        const reminder = this.reminders.find((reminder: { id: number; }) => reminder.id === id);
        if (reminder) {
            reminder.isComplete = false;
        }
    }    
    
    static getReminder(id: number): Reminder | undefined {
        return this.reminders.find((reminder: { id: number; }) => reminder.id === id);
    }
}

export default InMemoryDatabase;