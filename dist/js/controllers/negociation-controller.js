import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }
    add() {
        const negociation = this.createNegociation();
        console.log(negociation);
    }
    createNegociation() {
        const regex = /-/g;
        const date = new Date(this.inputDate.value.replace(regex, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
}
