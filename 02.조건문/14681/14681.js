const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [x, y] = fs.readFileSync(filePath, "utf-8").split("\n").map(Number);
if (x > 0) {
  x * y > 0 ? console.log("1") : console.log("4");
} else {
  x * y > 0 ? console.log("3") : console.log("2");
}
