process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(functionFromPwd());
  }
  process.stdout.write("\nprompt > ");
});

let functionFromPwd = require("./pwd");
