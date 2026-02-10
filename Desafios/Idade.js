const prompt = require("prompt-sync")();

let nome = String(prompt("Digite seu nome: "));
let idade = Number(prompt("Digite sua idade: "));

if (idade < 18) {
  console.log(nome + ", Você é menor de idade");
}
else if ((idade >= 18) & (idade < 60)) {
  console.log(nome + ", Você é adulto");
}
else if (idade > 60) {
  console.log(nome + ", Você é idoso");
}
