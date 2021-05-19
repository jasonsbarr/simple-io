import util from "util";

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

export function println(...args) {
  console.log(stringify(...args));
}
