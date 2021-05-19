import fs from "fs";

export function readFile(path, encoding = null) {
  return fs.readFileSync(path, { encoding });
}

export function readTextFile(path, encoding = "utf8") {
  return fs.readFileSync(path, { encoding });
}
