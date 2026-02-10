var prompt = require("prompt-sync")();

const tentativas = 0;
const aleatorio = Math.floor(Math.random() * 100);
console.log("==Bem-vindo ao meu jogo de adivinhação==");

while (tentativas != aleatorio) {
  var chute = String(prompt("Digite um numero de 1 a 100: "));
  if (chute > aleatorio) {
    console.log("ERROU!! O número é menor");
  } else if (chute < aleatorio) {
    console.log("ERROU!! O número é maior");
  } else if (chute == aleatorio) {
    console.log("Parabéns!!, voce acertou");
  }
}

console.log("As tentativas acabaram tente outra vez");
