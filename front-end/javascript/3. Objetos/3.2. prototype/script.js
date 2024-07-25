//PROTOTYPE
//A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const geane = new Pessoa('Geane', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(geane.prototype); // undefined


//FUNCAO.PROTOTYPE
//É possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto


//ACESSO AO PROTÓTIPO
//O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.
geane.nome;
geane.idade;
geane.andar();
geane.nadar();


//PROTO
//O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
console.log(geane.andar()); //Geane andou
console.log(geane.__proto__.andar()); //undefined andou, não acessou o nome


//HERANÇA DE PROTÓTIPO
//O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype;
geane.toString();
geane.isPrototypeOf();
geane.valueOf();


//CONSTRUTORES NATIVOS
//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;


//É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
//É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);
//Existe o método Array.from().


//MÉTODO DO OBJETO VS PROTÓTIPO
//Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

//APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS
[1,2,3].slice(); // existe - é do prototype
//[1,2,3].from(); // não existe - from é do objeto Array


//ENTENDA O QUE ESTÁ SENDO RETORNADO
//Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String
//Verifique o nome do construtor com .constructor.name


//EXERCÍCIOS
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome,
  this.sobrenome = sobrenome,
  this.idade = idade
}
const maria = new Pessoas('Maria', "Silva", 30)
console.log(maria);

Pessoas.prototype.nomeCompleto  = function() {
  return this.nome + ' ' + this.sobrenome
}
console.log(maria.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//NodeList.prototype:
// entries
// forEach
// item
// keys
// length
// values

//HTMLCollection.prototype:
//item
//length
//namedItem

//acessar direto os nomes por Object.getOwnPropertyNames(HTMLCollection.prototype)

//Document.prototype:
//URL
//URL
//activeElement
//adoptNode
//adoptedStyleSheets
//alinkColor
//all
//anchors
//append
//etc....(242)

//obs: Document é a função construtora, document é o objeto que foi construído
//Object > EventTarget > Node > Document > HTMLDocument > document


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li;
// li.click; 
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();
console.log(li.constructor.name); //HTMLLIElement
console.log(li.click.constructor.name); //Function
console.log(li.innerText.constructor.name); //String
console.log(li.value.constructor.name); //Number
console.log(li.hidden.constructor.name); //Boolean
console.log(li.offsetLeft.constructor.name); //Number
console.log(li.click().constructor.name); //undefined


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String


