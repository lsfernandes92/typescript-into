import { Negociation } from "./negociation.js";

export class Negociations {
  private negociations: Negociation[] = [];

  public add(negociation: Negociation): void {
    this.negociations.push(negociation);
  }

  public list(): readonly Negociation[] {
    return this.negociations;
  }
}