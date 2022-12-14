const readline = require("readline").createInterface({
  input: process.stdin,
});
const input = [];
readline.on("line", (line) => {
  input.push(line);
  if (input.length >= 2) {
    const [x, y] = input;
    if (y > 0) {
      x < 0 ? console.log("2") : console.log("1");
    } else {
      x < 0 ? console.log("3") : console.log("4");
    }
    readline.close();
  }
});
