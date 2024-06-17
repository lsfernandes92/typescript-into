import { WeekDays } from "../enums/week-days.js";
export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    static negociationCreator(inputDate, inputQuantity, inputNumber) {
        const regex = /-/g;
        const date = new Date(inputDate.replace(regex, ','));
        const quantity = parseInt(inputQuantity);
        const value = parseFloat(inputNumber);
        return new Negociation(date, quantity, value);
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
    toText() {
        return `
      Date: ${this.date},
      Quantity: ${this.quantity},
      Value: ${this.value}
    `;
    }
    hasSameDate(negoctiation) {
        const date = negoctiation.date;
        const dateSplitted = date.split("/");
        const dateToCompare = new Date(parseInt(dateSplitted[2]), parseInt(dateSplitted[1]), parseInt(dateSplitted[0]));
        return this._date.getDate() === dateToCompare.getDate();
    }
}
//# sourceMappingURL=negociation.js.map