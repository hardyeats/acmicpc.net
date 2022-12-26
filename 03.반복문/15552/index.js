const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const T = Number(input[0]);
result = "";
for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  result += `${A + B}\n`;
}
console.log(result);
