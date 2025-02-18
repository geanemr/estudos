"use strict";
// querySelector
// Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.
// https://developer.mozilla.org/en-US/docs/Web/API
document.querySelector('video'); // HTMLVideoElement
document.querySelector('img'); // HTMLImageElement
const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#origamid'); // Element 
link1?.href;
// link2?.href; // erro no ts = Property 'href' does not exist on type 'Element'.
if (link2 instanceof HTMLAnchorElement) {
    console.log({ link2 }); //{link2: a#origamid}
}
// querySelectorAll
// O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link);
    }
});
// erro, filter é um método de Array e não de NodeList
// const anchorLinks = links.filter((link) => link instanceof HTMLAnchorElement);
// Funciona, pois a NodeList foi transformada em uma Array
const anchorLinks = Array.from(links).filter((link) => link instanceof HTMLAnchorElement);
// Exercício
// 1 - Selecione os elementos com a classe link.
const allLinks = document.querySelectorAll('.link');
// 2 - Crie uma função que deve ser executada para cada elemento.
allLinks.forEach((link) => {
    if (link instanceof HTMLElement) {
        changeColor(link);
    }
});
// 3 - Modificar através da função o estilo da color e border.
function changeColor(element) {
    element.style.color = "red";
    element.style.border = "2px solid red";
}
//pois tanto HTMLAnchorElement quanto HTMLButtonElement herdam de HTML element
links.forEach((link) => console.log(link.__proto__.__proto__.__proto__.__proto__.__proto__));
HTMLAnchorElement / HTMLElement / Element / Node / EventTarget;
