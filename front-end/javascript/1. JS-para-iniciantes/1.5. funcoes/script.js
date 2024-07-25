//FUNCOES
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
//Parênteses () executam uma função

//PARÂMETROS E ARGUMENTOS
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos
function imc(peso, altura) { // peso e altura são os parâmetros
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

//PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'

//Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

//ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
//Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

//PODE OU NÃO RETORNAR UM VALOR
//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined porque nao tem return

//VALORES RETORNADOS
//Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//ESCOPO
//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido

//ESCOPO LÉXICO
//Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Desenvolvedora';

function dados() {
  var nome = 'Geane';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Porto Alegre';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'Geane, 29, Porto Alegre, Desenvolvedora'
//outrosDados(); // retorna um erro

//HOISTING
//Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc2(52, 1.61); // imc aparece no console

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log({imc2});
}

//Apenas declarações são hoisted(içadas, em português)
//O JavaScript apenas eleva (hoists) as declarações, não as inicializações/atribuições. Se uma variável for declarada e inicializada após usá-la, o valor será undefined. Por exemplo:

console.log({num}); // Retorna undefined
var num;
num = 6;

//Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor:
num = 6;
console.log(num); // retorna 6
var num;

let a;          // Declaração
a = 100;        // Inicialização - Atribuição de valor
console.log(a); // Uso
//mais sobre o assunto:
//https://medium.com/@allangrds/o-que-%C3%A9-hoisting-em-javascript-b8c629178518
//https://www.dio.me/articles/entendo-o-hoisting-no-javascript


//EXERCÍCIO
// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado
}
console.log('numero 1:',isTruthy(1)) //retorna true
console.log('string vazia:',isTruthy('')) //retorna false

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado) {
return lado * 4
}
console.log('quadrado:',quadrado(4)); //retorna 16

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}!`
}
console.log('nome completo:', nomeCompleto('Geane', 'Ramos')); //retorna Geane Ramos!

// Crie uma função que verifica se um número é par
function par(numero) {
  if(numero % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log('8:',par(8)); //retorna true
console.log('3:',par(3)); //retorna true

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado
}
console.log(tipoDeDado('olá')) //retorna string
console.log(tipoDeDado(23)) //retorna number


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
addEventListener('click', function nomenoConsole(){
  console.log('Geane');
})

// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

var totalPaises = 193; //deixei a var global para ser acessada por ambas funções
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log('preciso visitar:',precisoVisitar(20));
console.log('já visitei:',jaVisitei(20))
