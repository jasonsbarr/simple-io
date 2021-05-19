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
export function appendFile(filePath: string, data: any, encoding?: string | undefined): void;
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
export function appendTextFile(filePath: string, data: any, encoding?: string | undefined): void;
/**
 * Get the current directory name for a script
 *
 * @function dirname
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function dirname(): string;
/**
 * Get the current file name for a script
 *
 * @function filename
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function filename(): string;
/**
 * Returns the filename with complete path for the current script
 *
 * @function fileWithPath
 * @static
 * @since 0.1.0
 * @memberof File
 */
export function fileWithPath(): string;
/**
 * Joins multiple elements together to create a path
 *
 * @function joinPath
 * @static
 * @since 0.1.0
 * @memberof File
 * @param  {...any} args
 */
export function joinPath(...args: any[]): string;
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
export function readFile(filePath: string, encoding?: string | undefined): string | Buffer;
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
export function readJSONFile(filePath: string): Object;
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
export function readLines(filePath: string, encoding?: string | undefined): string[];
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
export function readTextFile(filePath: string, encoding?: string | undefined): string;
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
export function writeFile(filePath: string, data: any, encoding?: string | undefined): void;
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
export function writeJSONFile(filePath: string, data: any): void;
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
export function writeLines(filePath: string, data: any, encoding?: string | undefined): void;
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
export function writeTextFile(filePath: string, data: any, encoding?: string | undefined): void;
