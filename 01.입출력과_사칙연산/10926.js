const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  console.log(line + "??!");
  readline.close();
});
