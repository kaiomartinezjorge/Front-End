
var prompt = require("prompt-sync")(); //import da biblioteca

//funções de cálculo

//soma
function soma(a, b) {
  return a + b;
}
//sub
function sub(a, b) {
  return a - b;
}
//multi
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

//menu
function menu() {
  let operacao;
  let numero1;
  let numero2;
  let resultado;
  console.log("===Calculadora Simples===");
  console.log("| 1. Soma                ");
  console.log("| 2. Subtração           ");
  console.log("| 3. Multiplicação       ");
  console.log("| 4. Divisão             ");
  console.log("=========================");
  console.log("===Escolha a Operação====");
  operacao = prompt(); 
  numero1 = Number(prompt("Digite o 1º Número"));
  numero2 = Number(prompt("Digite o 2º Número"));


  switch (operacao) {
    case "1":
      resultado = soma(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "2":
      resultado = sub(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "3":
      resultado = multi(numero1, numero2);
      console.log("Resultado = " + resultado);
      break;
    case "4":
      if (numero2 == 0) {
        console.log("Não Dividirás por Zero");
        resultado = null;
      } else {
        resultado = div(numero1, numero2);
        console.log("Resultado = " + resultado);
      }
      break;

    default:
      console.log("Operação Inválida");
      resultado = null;
      break;
  } 
}

var continuar = true;
while (continuar) {
  menu();
  let escolha = prompt("1. Continuar // 2. Sair");
  if (escolha == 2) {
    continuar = false;
    console.log("Saindo...");
  }
}
