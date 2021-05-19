/**
 * Functions to get input synchronously from the user
 *
 * @namespace Input
 */
import readlineSync from "readline-sync";

/**
 * Displays a prompt and gets input from the user
 *
 * @function input
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @returns {String}
 */
export function input(prompt) {
  return readlineSync.question(prompt);
}

/**
 * Displays a prompt and gets input where the console output is replaced by '*'
 *
 * @function inputPassword
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @returns {String}
 */
export function inputPassword(prompt) {
  return readlineSync.question(prompt, {
    hideEchoBack: true,
  });
}

/**
 * Displays a prompt and gets a Y/N response from the user
 *
 * @function inputYOrN
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @returns {Boolean} true for "Y", else false
 */
export function inputYOrN(prompt) {
  return readlineSync.keyInYN(prompt);
}
