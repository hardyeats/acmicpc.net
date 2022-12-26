const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path, "utf-8").split("\n");
const X = Number(input[0].split(" ")[1]);
const result = input[1]
  .split(" ")
  .filter((item) => item < X)
  .toString()
  .replaceAll(",", " ");
console.log(result);
