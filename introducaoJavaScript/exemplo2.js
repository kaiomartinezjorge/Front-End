//Tipos de operadores

//Operadores aritmeticos (+ - * / %)
var a = 10;
var b = 3;
var c;
//Soma
c = a+b;
console.log("Soma: "+c);

//Subtração
c = a-b;
console.log("Subtração: " + c);

//Multiplicação
c = a*b;
console.log("Multi: "+c)

//Divisão
c = a/b;
console.log("Divisão: "+c)

//Resto da Divisão
c = a%b;
console.log("Resto: "+c);

//Operadores Relacionais(> < >= <= == === != !==)
var a = 10;
var b = 20;
var c = "20";

console.log("Relacionais: "+(a>b)); //false
//o que importa
console.log("Igualdade Simples: "+(b==c))//True
console.log("Igualdade Estrita: "+(b===c))//False

//Operadores Lógicos (&& - E , || - ou , ! - não)

var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " + nota1 > 7 && nota2 > 7); //false
console.log("Aprovação: " + nota1 > 7 || nota2);
console.log("Negação: "+!true); //false
