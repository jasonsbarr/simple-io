/**
 * Prints any values to stdout without a trailing newline
 *
 * @function print
 * @static
 * @since 0.1.0
 * @memberof Output
 * @param  {...any} args
 */
export function print(...args: any[]): void;
/**
 * Prints a C-like format string to stdout without a trailing newline
 *
 * @function printf
 * @static
 * @since 0.1.0
 * @memberof Output
 * @param {String} format C-like format string
 * @param  {...any} args
 */
export function printf(format: string, ...args: any[]): void;
/**
 * Prints any values to stdout with a trailing newline
 *
 * @function println
 * @static
 * @since 0.1.0
 * @memberof Output
 * @param  {...any} args
 */
export function println(...args: any[]): void;
