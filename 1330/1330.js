const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const line = fs.readFileSync(filePath).toString();
const [A, B] = line.split(" ").map(Number);
if (A === B) console.log("==");
else console.log(A < B ? "<" : ">");
