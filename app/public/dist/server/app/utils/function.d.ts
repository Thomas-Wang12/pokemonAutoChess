type DebouncedFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => void;
export declare function debounce<T extends (...args: any) => any>(fn: T, delayInMs?: number): DebouncedFunction<T>;
type ThrottledFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
export declare function throttle<T extends (...args: any) => any>(fn: T, delayInMs: number): ThrottledFunction<T>;
export declare function block<T extends (...args: any) => Promise<any>>(fn: T): (this: any, ...args: any[]) => Promise<any>;
export declare const repeat: (n: number) => (cb: (i: number) => void) => void;
export {};
