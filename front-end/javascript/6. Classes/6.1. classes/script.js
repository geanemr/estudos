//Constructor Function
//Funções responsáveis pela criação de objetos. O conceito de uma função construtora de objetos é implementado em outras linguagens como Classes.
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function() {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');
console.log(blueButton.element()); //<button style="background: blue;">Comprar</button>


//Class
//O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos continua utilizado o sistema de protótipos de uma função construtora para criar a classe.
class Button2 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const yellowButton = new Button2('Comprar', 'yellow');
console.log(yellowButton.element()); //<button style="background: yellow;">Comprar</button>


//Class vs Constructor Function
class Button3 {
  constructor(propriedade) {
    this.propriedade = propriedade;
  }
  metodo1() {}
  metodo2() {}
}

function Button4(propriedade) {
  this.propriedade = propriedade;
}
Button4.prototype.metodo1 = function() {}
Button4.prototype.metodo1 = function() {}


//Constructor
//O método constructor(args) {} é um método especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor.
class Button5 {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
}

const colorfulButton = new Button5('Clique', 'blue', 'white');
// Button {text: 'Clique', background: 'blue', color: 'white'}


//Constructor Return
//Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. Podemos modificar isso alterando o return do constructor, o problema é que perderá toda a referência do objeto.
class Button6 {
  constructor(text) {
    this.text = text;
    return this.element(); // não fazer
  }
  element() {
    document.createElement('button').innerText = this.text;
  }
}

const btn = new Button6('Clique');
// <button>Clique</button>


//This
//Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this.
class Button7 {
  constructor(text) {
    this.text = text;
  }
  element() {
    const buttonElement = document.createElement('button')
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  appendElementTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}

const clickButton = new Button7('Clique');
clickButton.appendElementTo('body');


//Propriedades
//Podemos passar qualquer valor dentro de uma propriedade.
class Button8 {
  constructor(options) {
    this.options = options;
  }
}

const pinkOptions = {
  backgroundColor: 'pink',
  color: 'white',
  text: 'Clique',
  borderRadius: '4px',
}

const pinkButton = new Button8(pinkOptions);
pinkButton.options;


//Static vs Prototype
//Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método do construtor Array.
class Button9 {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement('button');
    elementButton.style.background = background;
    elementButton.innerText = 'Clique';
    return elementButton;
  }
}

const newBlueButton = Button9.create('blue');


//Static
//Você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.
class Button10 {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton
  }
  static createBlue(text) {
    return new Button10(text, 'blue');
  }
}

const buyButton = Button.createBlue('Comprar');