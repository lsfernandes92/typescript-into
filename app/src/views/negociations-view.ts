import { safeEscape } from "../decorators/safe-escape.js";
import { Negociations } from "../models/negociations.js";
import { View } from "./view.js";

export class NegociationsView extends View<Negociations> {

  @safeEscape
  protected template(model: Negociations): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATE</th>
            <th>QUANTITY</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          ${model.list().map(negociation => {
            return `
              <tr>
                <td>${negociation.date}</td>
                <td>${negociation.quantity}</td>
                <td>${negociation.value}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
}