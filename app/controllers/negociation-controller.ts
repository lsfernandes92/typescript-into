import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView("#negociations-table");

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negociationsView.update(this.negociations);
  }

  add(): void {
    const negociation = this.createNegociation();
    this.negociations.add(negociation);
    this.negociationsView.update(this.negociations);
    this.clearForm();
  }

  createNegociation(): Negociation {
    const regex = /-/g;
    const date = new Date(this.inputDate.value.replace(regex, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);

    return new Negociation(date, quantity, value);
  }

  clearForm(): void {
    this.inputDate.value = ""
    this.inputQuantity.value = ""
    this.inputValue.value = ""
    this.inputDate.focus();
  }
}