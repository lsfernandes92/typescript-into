export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`### Method ${propertyKey}`);
        console.log(`### Params: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`### Return: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map