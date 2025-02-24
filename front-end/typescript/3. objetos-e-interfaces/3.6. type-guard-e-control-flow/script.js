"use strict";
// Guard, Safety e Narrowing
// O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento).
// O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard('Origamid'));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
// in
// O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.
const obj = {
    nome: 'Origamid',
};
if ('nome' in obj) {
    console.log('Sim');
}
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    if ('preco' in data) {
        document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
    }
}
fetchProduto();
