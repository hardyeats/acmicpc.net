const readline = require("readline").createInterface({
  input: process.stdin,
});

readline.on("line", (line) => {
  let [H, M] = line.split(" ").map(Number);
  M -= 45;
  if (M < 0) {
    H--;
    M += 60;
  }
  if (H < 0) H += 24;
  console.log(`${H} ${M}`);
  readline.close();
});
