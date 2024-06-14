import { logExecutionTime } from "../decorators/log-execution-time.js";

export abstract class View<T> {
  protected element: HTMLElement;
  private _safeEscape = false;

  constructor(selector: string, safeEscape?: boolean) {
    this.element = document.querySelector(selector);
    this._safeEscape = safeEscape;

    if (safeEscape) {
      this._safeEscape = safeEscape;
    }
  }

  @logExecutionTime()
  public update(model: T): void {
    let template = this.template(model);

    if (this._safeEscape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}