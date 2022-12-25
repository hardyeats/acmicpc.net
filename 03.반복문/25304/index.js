const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const [X, N] = input.splice(0, 2).map(Number);
let sum = 0;
for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  sum += a * b;
}
console.log(sum === X ? "Yes" : "No");
