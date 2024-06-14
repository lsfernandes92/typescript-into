var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logExecutionTime } from "../decorators/log-execution-time.js";
export class View {
    constructor(selector, safeEscape) {
        this._safeEscape = false;
        this.element = document.querySelector(selector);
        this._safeEscape = safeEscape;
        if (safeEscape) {
            this._safeEscape = safeEscape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._safeEscape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = this.template(model);
    }
}
__decorate([
    logExecutionTime()
], View.prototype, "update", null);
