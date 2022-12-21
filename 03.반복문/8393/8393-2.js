const fs = require("fs");
const n = fs.readFileSync("/dev/stdin", "utf-8").split("\n").map(Number)[0];
let result = 0;
for (let i = 1; i <= n; i++) {
  result += i;
}
console.log(result);
