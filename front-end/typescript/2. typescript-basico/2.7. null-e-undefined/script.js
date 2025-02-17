"use strict";
// null
// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
const button2 = document.querySelector('button');
const config = localStorage.getItem('config');
if (button2 !== null) {
    button2.click();
}
if (button2) {
    button2.click();
}
if (button2)
    button2.click();
button2?.click();
console.log(typeof null);
// undefined
// undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total3;
console.log(total3); // undefined
const livro = {};
const jogo = {
    nome: 'Ragnarok',
};
jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();
// strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.
// tsconfig.json
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }
