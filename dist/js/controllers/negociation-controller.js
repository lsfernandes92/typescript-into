import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.negociationsView = new NegociationsView("#negociations-table");
        this.messageView = new MessageView("#mensagemView");
        this.inputDate = document.querySelector("#date");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
        this.negociationsView.update(this.negociations);
    }
    add() {
        const negociation = Negociation.negociationCreator(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!negociation.isWeekDay()) {
            this.messageView.update("Only week days are valid values.");
            return;
        }
        this.negociations.add(negociation);
        this.updateView();
        this.clearForm();
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.negociationsView.update(this.negociations);
        this.messageView.update("Negociation added successfully!");
    }
}
