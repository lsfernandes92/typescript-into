export function logExecutionTime() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const t1 = performance.now();
      const originalCall = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`Method "${propertyKey}" execution time: ${(t2 - t1) / 1000} seconds.`);
      originalCall
    };

    return descriptor;
  }
}