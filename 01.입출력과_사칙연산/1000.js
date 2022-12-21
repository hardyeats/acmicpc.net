const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
result = 0;
readline.on("line", (line) => {
  line.split(" ").forEach((n) => (result += Number(n)));
  console.log(result);
  readline.close();
});
