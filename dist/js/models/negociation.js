import { WeekDays } from "../enums/week-days.js";
export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Intl.DateTimeFormat("pt-BR").format(this._date);
        return date;
    }
    isWeekDay() {
        return this._date.getDay() > WeekDays.SUNDAY
            && this._date.getDay() < WeekDays.SATURDAY;
    }
}
