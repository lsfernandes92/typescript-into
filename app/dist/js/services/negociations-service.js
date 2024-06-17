import { Negociation } from "../models/negociation.js";
export class NegociationsService {
    getTodaysNegociations() {
        return fetch("http://localhost:8080/dados")
            .then(response => response.json())
            .then((data) => {
            return data.map(todaysData => {
                return new Negociation(new Date(), todaysData.vezes, todaysData.montante);
            });
        });
    }
}
//# sourceMappingURL=negociations-service.js.map