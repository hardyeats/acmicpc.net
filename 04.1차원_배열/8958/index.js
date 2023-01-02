const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const N = Number(input.shift());
for (let i = 0; i < N; i++) {
  const output = new Array(input[i].length);
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      if (j > 0) {
        output[j] = output[j - 1] + 1;
      } else {
        output[j] = 1;
      }
      continue;
    }
    if (input[i][j] === "X") {
      output[j] = 0;
      continue;
    }
  }
  console.log(output.reduce((acc, val) => acc + val));
}
