const readline = require("readline").createInterface({
  input: process.stdin,
});
const input = [];
readline.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    console.log(input[0] * input[1][2]);
    console.log(input[0] * input[1][1]);
    console.log(input[0] * input[1][0]);
    console.log(input[0] * input[1]);
    process.exit(0);
  }
});
