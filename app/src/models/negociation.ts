import { NegociationController } from "../controllers/negociation-controller.js";
import { WeekDays } from "../enums/week-days.js";
import { Printable } from "../utils/printable.js";

export class Negociation implements Printable {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) { }

  public static negociationCreator(inputDate: string, inputQuantity: string, inputNumber: string): Negociation {
    const regex = /-/g;
    const date = new Date(inputDate.replace(regex, ','));
    const quantity = parseInt(inputQuantity);
    const value = parseFloat(inputNumber);

    return new Negociation(date, quantity, value);
  }

  get volume(): Number {
    return this.quantity * this.value;
  }

  get date(): string {
    const date = new Intl.DateTimeFormat("pt-BR").format(this._date);
    return date;
  }

  public isWeekDay(): boolean {
    return this._date.getDay() > WeekDays.SUNDAY
        && this._date.getDay() < WeekDays.SATURDAY;
  }

  public toText(): string {
    return `
      Date: ${this.date},
      Quantity: ${this.quantity},
      Value: ${this.value}
    `; 
  }

  public haveSameDate(negoctiation: Negociation): boolean {
    const date = negoctiation.date;
    const dateSplitted = date.split("/");
    const dateToCompare = new Date(parseInt(dateSplitted[2]), parseInt(dateSplitted[1]), parseInt(dateSplitted[0]));
    
    return this._date.getDate() === dateToCompare.getDate();
  }
}