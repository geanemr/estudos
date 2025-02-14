"use strict";
// Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
preencherDados({
    nome: 'Computador',
    preco: 2000,
    teclado: false,
});
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: true,
});
let resultado = 10;
resultado = '200';
function preencherDados2(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
function pintarCategoria(categoria) {
    if (categoria === 'design') {
        console.log('Pintar vermelho');
    }
    else if (categoria === 'codigo') {
        console.log('Pintar verde');
    }
    else if (categoria === 'descod') {
        console.log('Pintar roxo');
    }
}
pintarCategoria('codigo');
function preencherDados3(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <h2>${data.preco}</h2>
      <h2>${data.descricao}</h2>
      <h2>${data.garantia}</h2>
      <h2>${data.seguroAcidentes}</h2>
      <h2>${data.empresaFabricante.nome}</h2>
      <h2>${data.empresaFabricante.fundacao}</h2>
      <h2>${data.empresaFabricante.pais}</h2>
      <h2>${data.empresaMontadora.nome}</h2>
      <h2>${data.empresaMontadora.fundacao}</h2>
      <h2>${data.empresaMontadora.pais}</h2>
    </div>
  `;
}
