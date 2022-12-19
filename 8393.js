const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  const n = Number(line[0]);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
  readline.close();
});
