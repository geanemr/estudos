//Parâmetros
//Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
function perimetroForma(lado, totalLados) {
  return lado * totalLados;
}

perimetroForma(10, 4); // 40
perimetroForma(10); // NaN


//Parâmetro Padrão (Default) ES5
//Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
function perimetroForma2(lado, totalLados) {
  totalLados = totalLados || 4; // se não for definido, será igual à 4
  return lado * totalLados;
}

perimetroForma2(10, 3); // 30
perimetroForma2(10); // 40


//Parâmetro Padrão (Default) ES6+
//Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
function perimetroForma3(lado, totalLados = 4) {
  return lado * totalLados;
}

perimetroForma3(10, 5); // 50
perimetroForma3(10); // 4


//Arguments
//A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.
function perimetroForma4(lado, totalLados = 4) {
  console.log(arguments) // Arguments(3) [10, 4, 20, callee: (...), Symbol(Symbol.iterator): ƒ]
  return lado * totalLados;
}
perimetroForma4(10, 4, 20);


//Parâmetro Rest
//É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou.')
  });
} 
//Pedro ganhou.
//Marta ganhou.
//Maria ganhou.

anunciarGanhadores('Pedro', 'Marta', 'Maria');


//Único Rest
//Só é possível ter um único parâmetro rest e ele deve ser o último.
function anunciarGanhadores2(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}
//Pedro ganhou um Carro
//Marta ganhou um Carro
//Maria ganhou um Carro

anunciarGanhadores2('Carro', 'Pedro', 'Marta', 'Maria');


//Rest vs Arguments
//Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.
function anunciarGanhadores3(premio, ...ganhadores) {
  console.log(ganhadores); //["Pedro","Marta","Maria"]
  console.log(arguments); //Arguments(4) ['Carro', 'Pedro', 'Marta', 'Maria', callee: (...), Symbol(Symbol.iterator): ƒ]
}

anunciarGanhadores3('Carro', 'Pedro', 'Marta', 'Maria');


//Operador Spread
//Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.
const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];


//Spread Argument
//O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);


//Transformar em Array
//É possível transformar itens iteráveis em uma array real com o spread.
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];


// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {

    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
  } 
  
  const redButton = createButton();
  console.log(redButton); //<button style="background: blue; color: red;"></button>
  console.log(createButton('purple', 'green')); //<button style="background: purple; color: green;"></button>
  
  
  
  // Utilize o método push para inserir as frutas ao final de comidas.
  const frutas2 = ['Banana', 'Uva', 'Morango'];
  const comidas2 = ['Pizza', 'Batata'];

  comidas2.push(...frutas)
  console.log(comidas2); //["Pizza","Batata","Banana","Uva","Morango"]
  

//   Resumo
// Rest: Agrupa múltiplos elementos em um array.
// Spread: Espalha os elementos de um array ou objeto.
  