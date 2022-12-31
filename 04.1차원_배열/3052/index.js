const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin", "utf-8").split("\n").map(Number);
const set = new Set();
for (let i = 0; i < 10; i++) {
  set.add(numbers[i] % 42);
}
console.log(set.size);
