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
