import { TodaysNegociation } from "../interfaces/todays-negociation";
import { Negociation } from "../models/negociation.js";
import { Negociations } from "../models/negociations.js";

export class NegociationsService {
  public getTodaysNegociations(): Promise<Negociation[]> {
    return fetch("http://localhost:8080/dados")
      .then(response => response.json())
      .then((data: TodaysNegociation[]) => {
        return data.map(todaysData => {
          return new Negociation(new Date(), todaysData.vezes, todaysData.montante)
        })
      })
  }
}