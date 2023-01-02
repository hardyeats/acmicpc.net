const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const C = input.shift();
let str = "";
for (let i = 0; i < C; i++) {
  const line = input[i].split(" ").map(Number);
  const N = line.shift();
  const average = line.reduce((acc, val) => acc + val) / N;
  const result = ((line.filter((i) => i > average).length / N) * 100).toFixed(
    3
  );
  str += result + "%\n";
}
console.log(str);
