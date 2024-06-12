import { WeekDays } from "../enums/week-days.js";

export class Negociation {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) { }

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
}