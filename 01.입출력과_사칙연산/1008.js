const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  const input = line.split(" ");
  console.log(input[0] / input[1]);
  readline.close();
});
