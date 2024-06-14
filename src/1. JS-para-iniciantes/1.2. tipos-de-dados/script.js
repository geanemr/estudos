//Tipos de dados
var nome = "Geane"; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

//verificar tipo de dado
const cidade = "Porto Alegre";
console.log(typeof cidade); //string

//string
var nome = "Geane";
var sobrenome = "Ramos";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

//aspas duplas, simples e template string
~'JavaScript é "super" fácil';
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

//template string
var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String. Pode ser uma operação tb.


//EXERCÍCIOS
// Declare uma variável contendo uma string
var animal = "cachorro";

// Declare uma variável contendo um número dentro de uma string
var numero = "1";

// Declare uma variável com a sua idade
var minhaIdade = 28;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = "Geane";
var meuSobrenome = "Ramos";
var nomeCompleto = `${meuNome} ${meuSobrenome}`;
console.log({nomeCompleto})

// Coloque a seguinte frase em uma variável: It's time
const itTime = `it's time`;
console.log({itTime});

// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome);
