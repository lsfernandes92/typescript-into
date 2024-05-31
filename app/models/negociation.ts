export class Negociation {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) { }

  get volume(): Number {
    return this.quantity * this.value;
  }

  get data(): Date {
    const date = new Date(this._date.getDate());
    return date;
  }
}