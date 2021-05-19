import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Functions to read, write, and manipulate files
 *
 * @namespace File
 */

/**
 * Convert a relative path to absolute, if applicable
 *
 * @function getAbsPath
 * @ignore
 * @param {String} filePath The path to a file
 * @returns {String}
 */
function getAbsPath(filePath) {
  if (filePath.startsWith("./") || filePath.startsWith("../")) {
    filePath = joinPath(path.dirname(process.argv[1]), filePath);
  }
  return filePath;
}

/**
 * Append data to a file
 *
 * @function appendFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 * @param {String} [encoding=null]
 */
export function appendFile(filePath, data, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.appendFileSync(filePath, data, { encoding });
}

/**
 * Append text to a text file
 *
 * @function appendTextFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 * @param {String} [encoding="utf8"]
 */
export function appendTextFile(filePath, data, encoding = "utf8") {
  return appendFile(filePath, data, encoding);
}

/**
 * Get the current directory name for a script
 *
 * @function dirname
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function dirname() {
  return path.dirname(fileURLToPath(import.meta.url));
}

/**
 * Get the current file name for a script
 *
 * @function filename
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function filename() {
  return path.basename(process.argv[1]);
}

/**
 * Returns the filename with complete path for the current script
 *
 * @function fileWithPath
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function fileWithPath() {
  return process.argv[1];
}

/**
 * Joins multiple elements together to create a path
 *
 * @function joinPath
 * @static
 * @since 0.1.0
 * @memberof File
 * @param  {...any} args
 */
export function joinPath(...args) {
  return path.join(...args);
}

/**
 * Read the contents of a file
 *
 * @function readFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {String} [encoding=null]
 * @returns {String|Buffer}
 */
export function readFile(filePath, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.readFileSync(filePath, { encoding });
}

/**
 * Reads a file, parses it as JSON, and returns it
 *
 * @function readJSONFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @returns {Object}
 */
export function readJSONFile(filePath) {
  return JSON.parse(readFile(filePath, "utf8"));
}

/**
 * Splits a text file on line endings and returns an array of the lines
 *
 * @function readLines
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {String} [encoding="utf8"]
 * @returns {String[]}
 */
export function readLines(filePath, encoding = "utf8") {
  const file = readFile(filePath, encoding);
  let lines = [];
  if (file.match(/\r\n/)) {
    lines = file.split("\r\n");
  } else if (file.match(/\u0085/)) {
    lines = file.split("\u0085");
  } else if (file.match(/\r/)) {
    lines = file.split("\r");
  } else {
    lines = file.split("\n");
  }
  return lines;
}

/**
 * Reads and returns the contents of a text file
 *
 * @function readTextFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {String} [encoding="utf8"]
 * @returns {String}
 */
export function readTextFile(filePath, encoding = "utf8") {
  return readFile(filePath, encoding);
}

/**
 * Writes data to a file
 *
 * @function writeFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 * @param {String} [encoding=null]
 */
export function writeFile(filePath, data, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.writeFileSync(filePath, data, { encoding });
}

/**
 * Writes data to a file as JSON
 *
 * @function writeJSONFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 */
export function writeJSONFile(filePath, data) {
  return writeFile(filePath, JSON.stringify(data), "utf8");
}

/**
 * Joins an array of lines and writes them to a file
 *
 * @function writeLines
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 * @param {String} [encoding="utf8"]
 */
export function writeLines(filePath, data, encoding = "utf8") {
  let lineSep = "\n";
  if (process.platform == "win32") {
    lineSep = "\r\n";
  }
  const text = data.join(lineSep);
  return writeFile(filePath, text, encoding);
}

/**
 * Writes data to a file as text
 *
 * @function writeTextFile
 * @static
 * @since 0.1.0
 * @memberof File
 * @param {String} filePath
 * @param {Any} data
 * @param {String} [encoding="utf8"]
 */
export function writeTextFile(filePath, data, encoding = "utf8") {
  return writeFile(filePath, data, encoding);
}
