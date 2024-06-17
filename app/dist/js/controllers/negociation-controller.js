var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logExecutionTime } from "../decorators/log-execution-time.js";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";
import { NegociationsService } from "../services/negociations-service.js";
import { print } from "../utils/print.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.negociations = new Negociations();
        this.negociationsView = new NegociationsView("#negociations-table");
        this.messageView = new MessageView("#mensagemView");
        this.negociationsService = new NegociationsService();
        this.negociationsView.update(this.negociations);
    }
    add() {
        const negociation = Negociation.negociationCreator(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!negociation.isWeekDay()) {
            this.messageView.update("Only week days are valid values.");
            return;
        }
        this.negociations.add(negociation);
        print(negociation, this.negociations);
        this.updateView();
        this.clearForm();
    }
    import() {
        this.negociationsService
            .getTodaysNegociations()
            .then(todaysNegociations => {
            return todaysNegociations.filter(todayNegociation => {
                return !this.negociations
                    .list()
                    .some(negociation => negociation.haveSameDate(todayNegociation));
            });
        })
            .then(todaysNegociations => {
            for (const negociation of todaysNegociations) {
                this.negociations.add(negociation);
            }
            this.negociationsView.update(this.negociations);
        });
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
__decorate([
    domInjector("#date")
], NegociationController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#quantity")
], NegociationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#value")
], NegociationController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    logExecutionTime(true)
], NegociationController.prototype, "add", null);
