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
 * @param {String|Number|RegExp|Function|Array} [limit=null] Limits valid input to specified choices.
 * @param {String} [limitMessage=null] Message to display when user enters invalid input
 * @returns {String}
 * @example
 * input("Tell me something good: ") // no limit on input
 * input("Say 'potato': ", "potato") // can only input "potato"
 * input("Give me a word ending in 's': ", /.*s$/) // can only input words ending in "s"
 * input("How's the weather? ", ["rainy", "sunny", "cloudy", "snowing"]) // limits choices to those 4 words
 * input("Enter a valid IPv4 address: ", function(input) {
 *  return require("net").isIp(input);
 * }) // only allows you to enter a value for which the function returns true
 * input("Say 'potato': ", "potato", "You can only say 'potato'!") // example of limitMessage
 */
export function input(prompt, limit = null, limitMessage = null) {
  return readlineSync.question(prompt, { limit, limitMessage });
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
 * Gets a single-key input from the user
 *
 * @function inputKey
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @param {String|Number|Array} [limit=null] Limit which keys are accepted as input
 * @param {String} [limitMessage=null] Message to display when user enters invalid input
 * @returns {String}
 * @example
 * inputKey("Press any key"); // no limit
 * inputKey("Press a, b, or c", "abc") // limits valid inputs to a, b, or c
 * inputKey("Press a, b, or c", ["a", "b", "c"]) // limits valid inputs to a, b, or c
 */
export function inputKey(prompt, limit = null, limitMessage = null) {
  return readlineSync.keyIn(prompt, { limit, limitMessage });
}

/**
 * Prompts the user for input and returns a default value if there is no input
 *
 * @function inputWithDefault
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @param {String} defaultInput Returns this if user inputs no value
 * @returns {String}
 * @example
 * inputWithDefault("How are you doing? ", "meh...") // returns "meh..." if user enters no input
 */
export function inputWithDefault(prompt, defaultInput) {
  return readlineSync.question(prompt, {
    defaultInput,
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
  return readlineSync.keyInYNStrict(prompt);
}

/**
 * Pauses script execution to wait for the user to press a key
 *
 * @param {String} prompt
 * @param {String|Number|RegExp|Function|Array} [limit=null] Limits valid input to specified choices.
 * @param {String} [limitMessage=null] Message to display when user enters invalid input
 * @returns {undefined}
 */
export function pauseForInput(prompt, limit = null, limitMessage = null) {
  return readlineSync.keyInPause(prompt, { limit, limitMessage });
}
