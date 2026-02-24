var prompt = require("prompt-sync")();

console.log("==========Gerenciador de notas============");
let qntalunos = Number(prompt("Digite quantos alunos deseja gerenciar: "));

let alunos = [];
let materias = ["Matemática", "Português", "Ciências"];

for (let i = 0; i < qntalunos; i++) {
    console.log("\n");
    //Criação de um vetor secundario para que as notas tambem fiquem dinamicas
  alunos[i] = [];
  for (let j = 0; j < 3; j++) {
    let nota = Number(prompt("Digite a nota da disciplina " + materias[j] + " do aluno " + (i + 1) + ": "));
    alunos[i].push(nota);
  }
}

console.log("\n\n");
console.log(alunos);
console.log("\n\n");

function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

for (let i = 0; i < alunos.length; i++) {
  let media = calcularMedia(alunos[i]);
  if (media >= 7) {
    console.log("O aluno " + (i + 1) + " foi aprovado");
  }
  else{
    console.log("O aluno " + (i + 1) + " foi reprovado");
  } 
}
