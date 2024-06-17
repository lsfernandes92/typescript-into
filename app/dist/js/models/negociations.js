export class Negociations {
    constructor() {
        this.negociations = [];
    }
    add(negociation) {
        this.negociations.push(negociation);
    }
    list() {
        return this.negociations;
    }
    toText() {
        return JSON.stringify(this.negociations, null, 2);
    }
}
//# sourceMappingURL=negociations.js.map