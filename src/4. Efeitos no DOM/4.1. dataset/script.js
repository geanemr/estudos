//HTMLELEMENT
//Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

//O construtor HTMLElement é uma parte fundamental do DOM e serve como construtor base para todos os elementos HTML. Isso significa que cada elemento HTML no DOM herda propriedades e métodos do construtor HTMLElement.

const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1)); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

console.log(Object.prototype.toString())


//DATASET
//dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.
// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}


//DATA ATRIBUTES
//Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
  console.log(divs);
});
// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data


//DATA VS CLASS
//A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.


//NOMENCLATURA
//Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
const scroll = document.querySelector('[data-anima]');
console.log(scroll.dataset);
// {animaScroll: 'left'}
scroll.dataset.animaScroll; // left
scroll.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete scroll.dataset.animaScroll; // remove o atributo


//EXERCÍCIOS
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
const sections = document.querySelectorAll('section');
console.log({sections});

sections.forEach((section) => section.dataset.showDown && section.dataset.showRight)

