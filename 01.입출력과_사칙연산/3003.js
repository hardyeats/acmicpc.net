const readline = require("readline").createInterface({
  input: process.stdin,
});

const numbers = [1, 1, 2, 2, 2, 8];

readline.on("line", (line) => {
  const input = line.split(" ");
  numbers.forEach((n, i) => {
    console.log(n - input[i]);
  });
  readline.close();
});
