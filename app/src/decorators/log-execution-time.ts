export function logExecutionTime(inSeconds: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
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
      originalCall
    };

    return descriptor;
  }
}