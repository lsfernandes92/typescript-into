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
    const negociation = Negociation.negociationCreator(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    if (!negociation.isWeekDay()) {
      this.messageView.update("Only week days are valid values.");
      return;
    }

    this.negociations.add(negociation);
    this.updateView();
    this.clearForm();
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