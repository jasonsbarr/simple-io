import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export function dirname() {
  return path.dirname(fileURLToPath(import.meta.url));
}

export function filepath() {
  return process.argv[1];
}

export function joinPath(...args) {
  return path.join(...args);
}

export function readFile(filePath, encoding = null) {
  if (filePath.startsWith("./") || filePath.startsWith("../")) {
    filePath = joinPath(path.dirname(process.argv[1]), filePath);
  }
  return fs.readFileSync(filePath, { encoding });
}

export function readJSONFile(path) {
  return JSON.parse(readFile(path, "utf8"));
}

export function readLines(path, encoding = "utf8") {
  const file = readFile(path, encoding);
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

export function readTextFile(path, encoding = "utf8") {
  return fs.readFileSync(path, { encoding });
}
