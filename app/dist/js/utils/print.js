export function print(...objects) {
    for (const object of objects) {
        console.log(object.toText());
    }
}
