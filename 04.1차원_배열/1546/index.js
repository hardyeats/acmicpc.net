const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const M = Math.max(...scores);
const result = scores
  .map((s) => (s / M) * 100)
  .reduce((acc, s) => acc + s / scores.length, 0);
console.log(result);
