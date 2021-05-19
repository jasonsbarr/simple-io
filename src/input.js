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
 * Displays a prompt for the user to choose one from a list of choices
 *
 * @function inputChoice
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {Any[]} choices The list of choices
 * @param {String} prompt
 * @returns {Number} The array index of the user's choice, or -1 if they choose cancel
 */
export function inputChoice(choices, prompt) {
  return readlineSync.keyInSelect(choices, prompt);
}

/**
 * Displays a prompt and gets input where the console output is replaced by '*'
 *
 * @function inputHidden
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @returns {String}
 */
export function inputHidden(prompt) {
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
