const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const lines = fs.readFileSync(filePath, "utf-8").split("\n");
const T = Number(lines.shift());
let result = "";
for (let i = 0; i < T; i++) {
  const [R, S] = lines[i].split(" ");
  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(R);
  }
  result += "\n";
}
console.log(result);
