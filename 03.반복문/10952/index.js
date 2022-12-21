const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
for (const line of input) {
  if (line === "0 0") break;
  console.log(
    line
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
}
