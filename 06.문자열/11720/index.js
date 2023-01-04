const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const result = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")[1]
  .split("")
  .map(Number)
  .reduce((acc, val) => acc + val);
console.log(result);
