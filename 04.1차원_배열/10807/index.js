const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").split("\n");
const count = input[1].split(" ").filter((item) => item === input[2]).length;
console.log(count);
