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
