const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const numbers = fs
  .readFileSync(path, "utf-8")
  .split("\n")[1]
  .split(" ")
  .map(Number);
console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
