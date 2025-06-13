class Reminder {
    id: number;
    title: string;
    isComplete: Boolean;
    constructor(title: string) {
        this.id = Date.now();
        this.title = title;
        this.isComplete = false;
    }
}
export default Reminder;