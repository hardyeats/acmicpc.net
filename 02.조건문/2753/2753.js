const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const year = fs.readFileSync(filePath, "utf-8").split("\n").map(Number)[0];

(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  ? console.log("1")
  : console.log("0");
