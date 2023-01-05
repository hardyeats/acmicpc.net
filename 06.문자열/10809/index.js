const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const str = fs.readFileSync(filePath, "utf-8");
let result = "";
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  const index = str.indexOf(String.fromCharCode(i));
  result += `${index} `;
}
console.log(result);
