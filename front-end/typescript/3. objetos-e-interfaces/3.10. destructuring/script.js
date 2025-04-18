"use strict";
// Destructuring
// Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
const { body } = document;
function handleData3({ nome, preco }) {
    nome.includes('book');
    preco.toFixed();
}
handleData3({
    nome: 'Notebook',
    preco: 2000,
});
// Conhecer os Dados
// Durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.
function handleClick2({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
    }
}
document.documentElement.addEventListener('click', handleClick2);
function handleClick3({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
    }
}
document.documentElement.addEventListener("click", handleClick3);
//   ...rest
// O operador ...rest retorna uma Array.
function comparar(tipo, ...numeros) {
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
}
console.log(comparar('maior', 3, 2, 4, 30, 5, 6, 20));
console.log(comparar('menor', 3, 2, 4, 1, 5, 6, 20));
