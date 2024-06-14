import { logExecutionTime } from "../decorators/log-execution-time.js";
import { safeEscape } from "../decorators/safe-escape.js";

export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  @logExecutionTime()
  public update(model: T): void {
    let template = this.template(model);

    this.element.innerHTML = this.template(model);
  }

  protected abstract template(model: T): string;
}