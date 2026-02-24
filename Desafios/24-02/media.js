const prompt = require("prompt-sync")();

let nome = String(prompt("Qual o seu nome?: "));
let qntnotas = Number(prompt("Digite quantas notas deseja inserir: "));
let notas = [];
for (let i = 0; i < qntnotas; i++) {
  let nota = Number(prompt("Digite a nota " + (i + 1) + ": "));
  notas.push(nota);
}

let soma = notas.reduce((acumulador, numero) => acumulador + numero, 0);
let media = soma / qntnotas;
console.log(nome + ", sua média final é: " + media.toFixed(2));
