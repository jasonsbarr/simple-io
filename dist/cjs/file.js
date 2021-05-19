"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTextFile = exports.writeLines = exports.writeJSONFile = exports.writeFile = exports.readTextFile = exports.readLines = exports.readJSONFile = exports.readFile = exports.joinPath = exports.fileWithPath = exports.filename = exports.dirname = exports.appendTextFile = exports.appendFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
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
        filePath = joinPath(path_1.default.dirname(process.argv[1]), filePath);
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
function appendFile(filePath, data, encoding = null) {
    filePath = getAbsPath(filePath);
    return fs_1.default.appendFileSync(filePath, data, { encoding });
}
exports.appendFile = appendFile;
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
function appendTextFile(filePath, data, encoding = "utf8") {
    return appendFile(filePath, data, encoding);
}
exports.appendTextFile = appendTextFile;
/**
 * Get the current directory name for a script
 *
 * @function dirname
 * @static
 * @since 0.1.0
 * @memberof File
 */
function dirname() {
    return path_1.default.dirname(url_1.fileURLToPath(import.meta.url));
}
exports.dirname = dirname;
/**
 * Get the current file name for a script
 *
 * @function filename
 * @static
 * @since 0.1.0
 * @memberof File
 */
function filename() {
    return path_1.default.basename(process.argv[1]);
}
exports.filename = filename;
/**
 * Returns the filename with complete path for the current script
 *
 * @function fileWithPath
 * @static
 * @since 0.1.0
 * @memberof File
 */
function fileWithPath() {
    return process.argv[1];
}
exports.fileWithPath = fileWithPath;
/**
 * Joins multiple elements together to create a path
 *
 * @function joinPath
 * @static
 * @since 0.1.0
 * @memberof File
 * @param  {...any} args
 */
function joinPath(...args) {
    return path_1.default.join(...args);
}
exports.joinPath = joinPath;
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
function readFile(filePath, encoding = null) {
    filePath = getAbsPath(filePath);
    return fs_1.default.readFileSync(filePath, { encoding });
}
exports.readFile = readFile;
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
function readJSONFile(filePath) {
    return JSON.parse(readFile(filePath, "utf8"));
}
exports.readJSONFile = readJSONFile;
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
function readLines(filePath, encoding = "utf8") {
    const file = readFile(filePath, encoding);
    let lines = [];
    if (file.match(/\r\n/)) {
        lines = file.split("\r\n");
    }
    else if (file.match(/\u0085/)) {
        lines = file.split("\u0085");
    }
    else if (file.match(/\r/)) {
        lines = file.split("\r");
    }
    else {
        lines = file.split("\n");
    }
    return lines;
}
exports.readLines = readLines;
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
function readTextFile(filePath, encoding = "utf8") {
    return readFile(filePath, encoding);
}
exports.readTextFile = readTextFile;
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
function writeFile(filePath, data, encoding = null) {
    filePath = getAbsPath(filePath);
    return fs_1.default.writeFileSync(filePath, data, { encoding });
}
exports.writeFile = writeFile;
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
function writeJSONFile(filePath, data) {
    return writeFile(filePath, JSON.stringify(data), "utf8");
}
exports.writeJSONFile = writeJSONFile;
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
function writeLines(filePath, data, encoding = "utf8") {
    let lineSep = "\n";
    if (process.platform == "win32") {
        lineSep = "\r\n";
    }
    const text = data.join(lineSep);
    return writeFile(filePath, text, encoding);
}
exports.writeLines = writeLines;
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
function writeTextFile(filePath, data, encoding = "utf8") {
    return writeFile(filePath, data, encoding);
}
exports.writeTextFile = writeTextFile;
