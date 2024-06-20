//FOREACH
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});


//PARÂMETROS DO FOREACH
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function(item, index, array){
  console.log({item}); // o item atual no loop
  console.log({index}); // o número do index
  console.log({array}); // a Array completa, como se fosse dar console em imgs
});


//FOREACH E ARRAY
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);  //transforma a HTMLCollection acima em NodeList

titulosArray.forEach(function(item){
  console.log(item);
});


//ARROW FUNCTION
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
imgs.forEach((item) => {
  console.log(item);
});


//PARÂMETROS E PARÊNTESES
// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let item = 0;
imgs.forEach(() => {
  console.log(item++);
});


//RETURN
//É possível omitir as chaves {} para uma função que retorna uma linha.
imgs.forEach(item => 
  console.log(item)
);

imgs.forEach(item => console.log(item));
//Não é permitido fechar a linha com ;


//EXERCÍCIOS
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p")
console.log(paragrafos); //nodeList

paragrafos.forEach((item) => console.log(item))

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerHTML))

// Como corrigir os erros abaixo:
// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);


