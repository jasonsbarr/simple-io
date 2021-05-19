"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.println = exports.printf = exports.print = void 0;
const util_1 = __importDefault(require("util"));
const printf_1 = __importDefault(require("printf"));
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
        str += util_1.default.inspect(arg, {
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
 * @param  {...any} args
 */
function print(...args) {
    process.stdout.write(stringify(...args));
}
exports.print = print;
/**
 * Prints a C-like format string to stdout without a trailing newline
 *
 * @param {String} format C-like format string
 * @param  {...any} args
 */
function printf(format, ...args) {
    printf_1.default(process.stdout, format, ...args);
}
exports.printf = printf;
/**
 * Prints any values to stdout with a trailing newline
 *
 * @param  {...any} args
 */
function println(...args) {
    console.log(stringify(...args));
}
exports.println = println;
