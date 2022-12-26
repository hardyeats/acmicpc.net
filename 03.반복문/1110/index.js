const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = Number(fs.readFileSync(filePath, "utf-8"));

let M = N;
let S;
let cycleLength = 0;

while (N !== S) {
  const B = M % 10;
  const A = (M - B) / 10;
  S = B * 10 + ((A + B) % 10);
  M = S;
  cycleLength++;
}
console.log(cycleLength);
