import {
  dirname,
  filepath,
  joinPath,
  readFile,
  readJSONFile,
  readTextFile,
} from "./files.js";

import {
  input,
  inputChoice,
  inputHidden,
  inputKey,
  inputWithDefault,
  inputYOrN,
  pauseForInput,
} from "./input.js";

import { print, println } from "./output.js";

export {
  // File handling functions
  dirname,
  filepath,
  joinPath,
  readFile,
  readJSONFile,
  readTextFile,
  // Input functions
  input,
  inputChoice,
  inputHidden,
  inputKey,
  inputWithDefault,
  inputYOrN,
  pauseForInput,
  // Output functions
  print,
  println,
};
