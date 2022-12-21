const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const T = Number(input.splice(0, 1).join());
for (let i = 0; i < T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  console.log(`Case #${i + 1}: ${A + B}`);
}
