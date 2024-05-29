import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations: Array<Negociation> = [];

  add(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  list(): ReadonlyArray<Negociation> {
    return this.negociations;
  }
}