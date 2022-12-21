const readline = require("readline").createInterface({
  input: process.stdin,
});
const input = [];
readline.on("line", (line) => {
  input.push(line);
  if (input.length >= 2) {
    let [H, M] = input[0].split(" ").map(Number);
    const C = Number(input[1]);
    M += C;
    while (M >= 60) {
      H++;
      M -= 60;
    }
    if (H >= 24) {
      H -= 24;
    }
    console.log(H, M);
    readline.close();
  }
});
