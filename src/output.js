import util from "util";
import { default as pPrintf } from "printf";

/**
 * Convert output of any type to a string for display
 *
 * @function stringify
 * @ignore
 * @param  {...any} args
 * @returns
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

export function print(...args) {
  process.stdout.write(stringify(...args));
}

export function printf(format, ...args) {
  pPrintf(process.stdout, format, ...args);
}

export function println(...args) {
  console.log(stringify(...args));
}
