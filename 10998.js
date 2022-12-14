const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 1;

readline.on("line", (line) => {
  line.split(" ").forEach((n) => (result *= n));
  console.log(result);
  readline.close();
});
