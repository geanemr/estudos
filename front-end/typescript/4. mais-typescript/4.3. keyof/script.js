"use strict";
let chave;
// let chave: "nome" | "preco";
chave = 'nome';
chave = 'preco';
// typeof
// Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar('video'); //function selecionar<"video">(seletor: "video"): HTMLVideoElement | null
selecionar('a'); //function selecionar<"video">(seletor: "video"): HTMLVideoElement | null
// checkInterface
// O keyof pode ser utilizado para criarmos funções genéricas utilitárias.
async function fetchData(url) {
    const response = await fetch(`https://api.origamid.dev/json${url}`);
    return await response.json();
}
async function handleData4() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface(jogo, 'desenvolvedora')) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData('/livro.json');
    if (checkInterface(livro, 'autor')) {
        console.log(livro.autor);
    }
}
handleData4();
function checkInterface(obj, ...keys) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length) {
        return true;
    }
    else {
        return false;
    }
}
function checkInterfaceSimples(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
