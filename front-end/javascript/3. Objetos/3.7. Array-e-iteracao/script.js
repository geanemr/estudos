//[].FOREACH()
//[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log('log 1:',item.toUpperCase());
});

// com Arrow Function
const resultado = carros.forEach((item, index, array) => {
  console.log('log 2:',item.toUpperCase());
});
//obs: O método sempre retorna undefined
console.log({resultado}); //undefined
//porque o objetivo do forEach não é o retorno e sim a iteração

//obs: da forma acima não temos como modificar o array original. Veremos como fazer isso logo mais.


//ARROW FUNCTION
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});

//MODIFICAR A ARRAY ORIGINAL
//O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
//É melhor utilizarmos o map para isso


//[].MAP()
//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
const veiculos = ['Volkswagen', 'Hyundai', 'Toyota'];
const newVeiculos = veiculos.map((item) => {
  return 'Veículo ' + item;
});

console.log(veiculos); // ['Volkswagen', 'Hyundai', 'Toyota']
console.log(newVeiculos); // ['Veículo Volkswagen', 'Veículo Hyundai', 'Veículo Toyota']; 


//VALOR RETORNADO
//Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
const newVeiculos2 = veiculos.map((item) => {
  const novoValor = 'Veiculos ' + item;
});
console.log(newVeiculos2); // [undefined, undefined, undefined];


//ARROW FUNCTION E [].MAP()
//Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


//[].MAP() VS [].FOREACH()
//Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.
const numerosX32 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];


//[].MAP() COM OBJETOS
//Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

//[].REDUCE()
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador(ou previousValue), mas é na verdade apenas o retorno da iteração anterior.
const aulasMin = [10, 25, 30];
const total1 = aulasMin.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65
console.log({total1});

const total2 = aulasMin.reduce((acc, cur) => acc + cur, 100);
total2; // 165
console.log({total2});


//REDUCE PASSO A PASSO 1
//O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.

// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

//REDUCE PASSO A PASSO 2
//Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

// const aulas = [10, 25, 30];

// // 1
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }) // retorna 35

// // 2
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }) // retorna 65

//MAIOR VALOR COM [].REDUCE()
const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros3.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

console.log({maiorValor}); // 60

//PODEMOS RETORNAR OUTROS VALORES
const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

//PASSO A PASSO REDUCE
//Passo a passo do método reduce criando um Objeto.
// 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// // 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// // 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// // 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})

//[].REDUCERIGHT()
//Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//[].SOME()
//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.
const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva';
}); // true

const temPera = frutas2.some((fruta) => fruta === "Pêra")
console.log({temPera});//true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros4 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros4.some(maiorQue100); // true

//[].EVERY()
//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.
const frutas5 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas5.every((fruta) => {
  return fruta; // false
});

const saoTodosPera = frutas5.every((fruta) => fruta === "Pêra")
console.log({saoTodosPera}); //false

const numeros5 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true


//[].FIND() E [].FINDINDEX()
//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas6 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas6.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find(x => x > 45); // 88


//[].FILTER()
//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.
const frutas7 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas7.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros7 = [6, 43, 22, 88, 101, 29];
const buscaMaior452 = numeros7.filter(x => x > 45); // [88, 101]

//FILTER E OBJETOS
const aulasMaiores = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]


//EXERCÍCIOS
// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)
console.log({arrayCursos});

const cursosDetalhes = arrayCursos.map((curso) =>{
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
return { titulo, descricao, aulas, horas}
})

console.log({cursosDetalhes});


// Retorne uma lista com os
// números maiores que 100
const numerosExercicio = [3, 44, 333, 23, 122, 322, 33];
const maiorque100 = numerosExercicio.filter((numero) => numero > 100)
console.log({maiorque100}); //[333, 122, 322]


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some((instrumento) => instrumento === 'Baixo')
console.log({temBaixo}); //true


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
]

const precos = compras.map((compra) => compra.preco)
const precosAjustados = precos.map((compra) => {
  return parseFloat(compra.replace("R$", '').trim().replace(',', '.'))
})

const soma = precosAjustados.reduce((acumulador, atual) => acumulador + atual, 0)

console.log({soma});

//OU mais simples:
const valorTotal = compras.reduce((previousValue, currentValue) => {
  const precoLimpo = +currentValue.preco.replace('R$', '').replace(',', '.');
  return previousValue + precoLimpo;
}, 0);
console.log({valorTotal});