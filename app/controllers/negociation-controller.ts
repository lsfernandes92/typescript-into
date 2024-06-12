import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView("#negociations-table");
  private messageView = new MessageView("#mensagemView");

  constructor() {
    this.inputDate = document.querySelector("#date");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
    this.negociationsView.update(this.negociations);
  }

  public add(): void {
    const negociation = this.createNegociation();

    if (!negociation.isWeekDay()) {
      this.messageView.update("Only week days are valid values.");
      return;
    }

    this.negociations.add(negociation);
    this.updateView();
    this.clearForm();
  }

  private createNegociation(): Negociation {
    const regex = /-/g;
    const date = new Date(this.inputDate.value.replace(regex, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);

    return new Negociation(date, quantity, value);
  }

  private clearForm(): void {
    this.inputDate.value = ""
    this.inputQuantity.value = ""
    this.inputValue.value = ""
    this.inputDate.focus();
  }

  private updateView(): void {
    this.negociationsView.update(this.negociations);
    this.messageView.update("Negociation added successfully!");
  }
}