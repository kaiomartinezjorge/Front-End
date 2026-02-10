const prompt = require("prompt-sync")();

let num = Number(prompt("Digite o numero que deseja ver a tabuada: "));

for (let i = 0; i <= 10; i++) {
  console.log(num, "x", i, "=", num * i);
}

