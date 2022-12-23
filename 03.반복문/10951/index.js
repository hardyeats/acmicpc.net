const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
for (line of input) {
  const [A, B] = line.split(" ").map(Number);
  console.log(A + B);
}
