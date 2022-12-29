const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const numbers = fs.readFileSync(filePath, "utf-8").split("\n").map(Number);
const max = Math.max(...numbers);
const index = numbers.indexOf(max);
console.log(`${max}\n${index + 1}`);
