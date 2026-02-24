//Declaração de um array
let Array = [];//Array dinamico
//Tipos de array
let arrayNumerico = [1,2,3,4,5,6,7,8,9];
let arrayTexto = ["Sapato", "Chinelo", "Tamanco"];
let arrayMisto = [1, "Jose", true];

//Tamanho de um array (Lenght)
console.log(arrayNumerico.length);//9

//Acessar a posição de um array
console.log(arrayTexto[1]);//Chinelo

//Adicionar elementos no Array
//push / unshift
//no final
arrayTexto.push("Tenis");
console.log(arrayTexto);
//no começo
arrayTexto.unshift("Sandália");
console.log(arrayTexto);
//trocar o valor de um elemento

arrayTexto[2]="Crocs";
console.log(arrayTexto);
//Substitui o elemento da 3º posição [2] por Crocs

//Remover Elementos (Shift / pop)
//no começo 
arrayTexto.shift();
console.log(arrayTexto);
//remove no final
arrayTexto.pop();
console.log(arrayTexto);

//laços de repetição

// percorrer um array com for
for(let i=0; i<arrayNumerico.length; i++){
    console.log[`indice[${i}]= ${arrayNumerico[i]}`];
}

//forEach ( para cada elemento do array) => so pode ser usada em um array

arrayMisto.forEach(e => {
    console.log(e);
})

//Métodos úteis de Arrays

//Indexof
console.log(arrayNumerico.indexOf(5));//4
console.log(arrayNumerico.indexOf(10));//-1(elemento inexistente)

//Remover Elemento de um posição
//Splice
arrayMisto.splice(2,1);//Remove o elemento do índice 2, por uma única vez
console.log(arrayMisto);