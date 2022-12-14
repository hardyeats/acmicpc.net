const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const score = Number(fs.readFileSync(filePath).toString());

if (score / 10 >= 9) console.log("A");
else if (score / 10 >= 8) console.log("B");
else if (score / 10 >= 7) console.log("C");
else if (score / 10 >= 6) console.log("D");
else console.log("F");
