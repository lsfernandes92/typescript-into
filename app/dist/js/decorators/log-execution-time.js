export function logExecutionTime(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = "miliseconds";
            if (inSeconds) {
                divider = 1000;
                unit = "seconds";
            }
            const t1 = performance.now();
            const originalCall = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`Method "${propertyKey}" execution time: ${(t2 - t1) / divider} ${unit}.`);
            originalCall;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-execution-time.js.map