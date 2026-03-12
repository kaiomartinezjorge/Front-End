//DOM => Document Object Model

//Script de Manipulação DOM

//getElementById => variavel Simples - Id é sempre única
// usar sempre o document para manipular o dom
let titulo = document.getElementById("titulo"); //busca no html o elemento com a id correspondente
console.log(titulo); //mostra a informação da id
titulo.innerText = "Outro Título para o Site"; //modifica o conteúdo da ID

//getElementByTagName => Vetor (Array) de elementos
let paragrafo = document.getElementsByTagName("p"); //html => p
paragrafo[0].innerText = "Exemplo de parágrafo modificado por DOM";
paragrafo[1].style.color = "red";//Modificar o Syle do Elemento

//getelementByClassName => Vetor de elementos
let descricao = document.getElementsByClassName("Descricao");
// modificar elementos do Array
for (let  i = 0; i < descricao.length; i++) {
    descricao[i].style.color = "blue";
}

//querySelector => variavel simples = seleciona sempre o primeiro elemento com o seletor
let p = document.querySelector("p");
//Modificar a fonte
p.style.accentColor.fontWeight = "bold"

//queryselectorAll => Vetor de Elementos => Seleciona todos os elementos 
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(e => e.style.fontWeight = "bold");

//Evento Listener (ouvintes)

//Chamar pelo nome da função
function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "green";
}

//Chamar diretamenta no script o ouvinte
document.getElementById("btnColor").addEventListener("click",Outracor);

function Outracor() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}