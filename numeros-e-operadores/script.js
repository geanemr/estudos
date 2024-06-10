// números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// operadores aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// operadores aritméticos (strings)
var soma = '100' + 50; // 10050 (concatena)
var subtracao = '100' - 50; // 50 (converte)
var multiplicacao = '100' * '2'; // 200 (converte)
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
console.log(typeof multiplicacao);

// NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois);

// a ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// operadores aritméticos unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; 
// 35
console.log(total);

// Crie uma expressão que retorne NaN
var quilos = '2kg'
var altura = '2m'
var imc = quilos / altura
console.log(imc);


// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var numero = 5
numero++
console.log(numero);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoPorDoisCorreto = numero/2 + 'kg'
console.log(pesoPorDoisCorreto);

// ou
var porDois = + '80'/2
console.log(porDois);
