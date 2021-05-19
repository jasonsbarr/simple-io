import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function getAbsPath(filePath) {
  if (filePath.startsWith("./") || filePath.startsWith("../")) {
    filePath = joinPath(path.dirname(process.argv[1]), filePath);
  }
  return filePath;
}

export function appendFile(filePath, data, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.appendFileSync(filePath, data, { encoding });
}

export function appendTextFile(filePath, data, encoding = "utf8") {
  return appendFile(filePath, data, encoding);
}

export function dirname() {
  return path.dirname(fileURLToPath(import.meta.url));
}

export function filename() {
  return path.basename(process.argv[1]);
}

export function filepath() {
  return process.argv[1];
}

export function joinPath(...args) {
  return path.join(...args);
}

export function readFile(filePath, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.readFileSync(filePath, { encoding });
}

export function readJSONFile(filePath) {
  return JSON.parse(readFile(filePath, "utf8"));
}

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

export function readTextFile(filePath, encoding = "utf8") {
  return readFile(filePath, encoding);
}

export function writeFile(filePath, data, encoding = null) {
  filePath = getAbsPath(filePath);
  return fs.writeFileSync(filePath, data, { encoding });
}

export function writeJSONFile(filePath, data) {
  return writeFile(filePath, JSON.stringify(data), "utf8");
}

export function writeLines(filePath, data, encoding = "utf8") {
  let lineSep = "\n";
  if (process.platform == "win32") {
    lineSep = "\r\n";
  }
  const text = data.join(lineSep);
  return writeFile(filePath, text, encoding);
}

export function writeTextFile(filePath, data, encoding = "utf8") {
  return writeFile(filePath, data, encoding);
}
