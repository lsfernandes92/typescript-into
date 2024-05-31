import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations: Negociation[] = [];

  add(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  list(): readonly Negociation[] {
    return this.negociations;
  }
}