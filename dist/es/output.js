import util from "util";
import { default as pPrintf } from "printf";
/**
 * Functions to display output to stdout
 *
 * @namespace Output
 */
/**
 * Convert output of any type to a string for display
 *
 * @function stringify
 * @ignore
 * @param  {...any} args
 * @returns {String}
 */
function stringify(...args) {
    let str = "";
    let i = 0;
    for (let arg of args) {
        str += util.inspect(arg, {
            showHidden: true,
            depth: null,
            showProxy: true,
        });
        if (i < args.length - 1) {
            str += " ";
        }
        i++;
    }
    return str;
}
/**
 * Prints any values to stdout without a trailing newline
 *
 * @function print
 * @static
 * @since 0.1.0
 * @memberof Output
 * @param  {...any} args
 */
export function print(...args) {
    process.stdout.write(stringify(...args));
}
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
export function printf(format, ...args) {
    pPrintf(process.stdout, format, ...args);
}
/**
 * Prints any values to stdout with a trailing newline
 *
 * @function println
 * @static
 * @since 0.1.0
 * @memberof Output
 * @param  {...any} args
 */
export function println(...args) {
    console.log(stringify(...args));
}
