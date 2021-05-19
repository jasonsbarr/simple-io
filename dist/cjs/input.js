"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pauseForInput = exports.inputYOrN = exports.inputWithDefault = exports.inputKey = exports.inputHidden = exports.inputChoice = exports.input = void 0;
/**
 * Functions to get input synchronously from the user
 *
 * @namespace Input
 */
const readline_sync_1 = __importDefault(require("readline-sync"));
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
function input(prompt, limit = null, limitMessage = null) {
    return readline_sync_1.default.question(prompt, { limit, limitMessage });
}
exports.input = input;
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
function inputChoice(choices, prompt) {
    return readline_sync_1.default.keyInSelect(choices, prompt);
}
exports.inputChoice = inputChoice;
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
function inputHidden(prompt) {
    return readline_sync_1.default.question(prompt, {
        hideEchoBack: true,
    });
}
exports.inputHidden = inputHidden;
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
function inputKey(prompt, limit = null, limitMessage = null) {
    return readline_sync_1.default.keyIn(prompt, { limit, limitMessage });
}
exports.inputKey = inputKey;
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
function inputWithDefault(prompt, defaultInput) {
    return readline_sync_1.default.question(prompt, {
        defaultInput,
    });
}
exports.inputWithDefault = inputWithDefault;
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
function inputYOrN(prompt) {
    return readline_sync_1.default.keyInYNStrict(prompt);
}
exports.inputYOrN = inputYOrN;
/**
 * Pauses script execution to wait for the user to press a key
 *
 * @function pauseForInput
 * @static
 * @since 0.1.0
 * @memberof Input
 * @param {String} prompt
 * @param {String|Number|RegExp|Function|Array} [limit=null] Limits valid input to specified choices.
 * @param {String} [limitMessage=null] Message to display when user enters invalid input
 * @returns {undefined}
 */
function pauseForInput(prompt, limit = null, limitMessage = null) {
    return readline_sync_1.default.keyInPause(prompt, { limit, limitMessage });
}
exports.pauseForInput = pauseForInput;
