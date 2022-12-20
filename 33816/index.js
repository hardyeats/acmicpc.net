const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");

const X = Number(input[0]);
const N = Number(input[1]);
let result = 0;
input.splice(0, 2);
for (let i = 0; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(a, b);
  result += a * b;
}
console.log(X === result ? "Yes" : "No");
