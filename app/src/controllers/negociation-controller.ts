import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { TodaysNegociation } from "../interfaces/todays-negociation.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsService } from "../services/negociations-service.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  @domInjector("#date")
  private inputDate: HTMLInputElement;
  @domInjector("#quantity")
  private inputQuantity: HTMLInputElement;
  @domInjector("#value")
  private inputValue: HTMLInputElement;
  private negociations = new Negociations();
  private negociationsView = new NegociationsView("#negociations-table");
  private messageView = new MessageView("#mensagemView");
  private negociationsService = new NegociationsService();

  constructor() {
    this.negociationsView.update(this.negociations);
  }

  @inspect
  @logExecutionTime(true)
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

  public import(): void {
    this.negociationsService
      .getTodaysNegociations()
      .then(todaysNegociations => {
        for (const negociation of todaysNegociations) {
          this.negociations.add(negociation);
        }
        this.negociationsView.update(this.negociations);
      })
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