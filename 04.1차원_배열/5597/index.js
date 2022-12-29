const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const numbers = fs
  .readFileSync(filePath, "utf-8")
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);
for (let i = 1; i <= 30; i++) {
  if (numbers.indexOf(i) !== -1) continue;
  console.log(i);
}
