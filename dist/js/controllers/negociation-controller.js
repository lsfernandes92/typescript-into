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
        const negociation = this.createNegociation();
        if (!negociation.isWeekDay()) {
            this.messageView.update("Only week days are valid values.");
            return;
        }
        this.negociations.add(negociation);
        this.updateView();
        this.clearForm();
    }
    createNegociation() {
        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
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
