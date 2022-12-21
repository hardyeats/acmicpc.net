const readline = require("readline").createInterface({
  input: process.stdin,
});

const input = [];
let T = 0;
readline.on("line", (line) => {
  input.push(line);
  if (input.length === 1) T = Number(line[0]);
  else if (input.length > T) {
    input.splice(0, 1);
    for (const _line of input) {
      console.log(
        _line
          .split(" ")
          .map(Number)
          .reduce((acc, val) => acc + val, 0)
      );
    }
    readline.close();
  }
});
