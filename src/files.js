import fs from "fs";

export function readFile(path, encoding = null) {
  return fs.readFileSync(path, { encoding });
}

export function readJSONFile(path) {
  return JSON.parse(fs.readFileSync(path, { encoding: "utf8" }));
}

export function readTextFile(path, encoding = "utf8") {
  return fs.readFileSync(path, { encoding });
}
