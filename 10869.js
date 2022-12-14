const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  const input = line.split(" ");
  console.log(Number(input[0]) + Number(input[1]));
  console.log(input[0] - input[1]);
  console.log(input[0] * input[1]);
  console.log(Math.floor(input[0] / input[1]));
  console.log(input[0] % input[1]);
  readline.close();
});
