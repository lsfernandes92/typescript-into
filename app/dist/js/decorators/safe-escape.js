export function safeEscape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let result = originalMethod.apply(this, args);
        console.log("String escaped successfully!");
        if (typeof result === 'string') {
            result = result.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=safe-escape.js.map