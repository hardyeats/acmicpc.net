const readline = require("readline").createInterface({
  input: process.stdin,
});
readline.on("line", (line) => {
  const [a, b, c] = line.split(" ").map(Number);
  let reward = 0;
  if (a === b && b === c) {
    reward = 10000 + a * 1000;
  } else if (a !== b && b !== c && c !== a) {
    reward = Math.max(a, b, c) * 100;
  } else {
    reward += 1000;
    if (a === b) reward += a * 100;
    if (b === c) reward += b * 100;
    if (c === a) reward += c * 100;
  }

  console.log(reward);
  readline.close();
});
