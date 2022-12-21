const readline = require("readline").createInterface({
  input: process.stdin,
});
const input = [];
let index = 0;
readline.on("line", (line) => {
  input.push(line);
  index++;
  if (index > Number(input[0])) {
    for (let i = 1; i < Number(input[0]); i++) {
      console.log(input[i][0] + input[i][0]);
    }
    readline.close();
  }
});
