//OBJETOS
//Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'Geane',
  idade: 28,
  profissao: 'Desenvolvedora',
  possuiFaculdade: true,
}

pessoa.nome; // 'Geane'
pessoa.possuiFaculdade; // true
//Propriedades e métodos consistem em nome (chave) e valor


//MÉTODOS
//São propriedades que possuem uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//Abreviação de area: function() {} para area() {}, no ES6+:
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


//ORGANIZAR O CÓDIGO
//Objetos servem para organizar o código em pequenas partes reutilizáveis.
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14


//CRIAR UM OBJETO
//Um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'


//DOT NOTATION GET
//Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'


//DOT NOTATION SET
//Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

//ADICIONAR PROPRIEDADES E MÉTODOS
//Basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';
console.log(menu)//{width: 800, height: 50, position: 'fixed'}

//PALAVRA-CHAVE THIS
//this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

//PROTÓTIPO E HERANÇA
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false


//EXERCÍCIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: 'Geane',
  sobrenome: 'Ramos',
  idade: 28,
  cidade: 'Porto Alegre'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
console.log(meusDados.nomeCompleto())// Geane Ramos
//precisa dos parênteses pois é um método

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 20000
console.log(carro) //preco foi para 20000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'latir'
    } else {
      return 'nada'
    }
  }
}

console.log(cachorro.latir('homem')) //latir