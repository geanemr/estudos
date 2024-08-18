//Factory Function
//São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element: element,
    text: text,
  }
}

const comprarBtn = createButton('Comprar');
console.log(comprarBtn); //{text: 'Comprar', element: ƒ}


//Métodos / Variáveis privadas
//Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const desenvolvedora = criarPessoa('Geane', 'Ramos');
console.log(desenvolvedora);



//Ice Factory
//Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.
'use strict';

function umaPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

const newPessoa = umaPessoa('Geane', 'Ramos');
newPessoa.nome = 'Fulano'
console.log(newPessoa); //{nome: 'Geane', sobrenome: 'Ramos', andar: ƒ} Ou seja, não mudou


//Constructor Function / Factory Function
//Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.
function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`;
}

const designer = Pessoa('Geane');


//Exemplo de uso
function allElements(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    this // para nao ter o retorno como undefined e poder encadear outros métodos de allElements (é a mesma coisa que return function allElements(selectedElements))
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    this 
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    this
  }

  function addClass(classname) {
    elements.forEach((element) => {
      element.classList.toggle(classname)
    })
    return allElements(selectedElements)
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass
  };
}

const btns = allElements("button");
btns.hide();
btns.show();
btns.on("click", handleClick);
function handleClick(event) {
  console.log(event.target);
}
btns.addClass('active')
