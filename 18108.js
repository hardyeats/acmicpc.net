const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  console.log(line - 543);
  readline.close();
});
