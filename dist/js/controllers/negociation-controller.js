import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    add() {
        const negociation = this.createNegociation();
        this.negociations.add(negociation);
        console.log(this.negociations.list());
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
}
