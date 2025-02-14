// Object
// É possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}
function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
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


// Type
// A palavra-chave type cria um atalho (alias) para um tipo customizado.
type NumberOrString = number | string;

let resultado: NumberOrString = 10;
resultado = '200';

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados2(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: Categorias) {
  if (categoria === 'design') {
    console.log('Pintar vermelho');
  } else if (categoria === 'codigo') {
    console.log('Pintar verde');
  } else if (categoria === 'descod') {
    console.log('Pintar roxo');
  }
}

pintarCategoria('codigo');


// Interface
// interface geralmente da mesma forma que type, porém possui uma sintaxe diferente. As intefaces são geralmente utilizadas para definirmos objetos.

// A diferença será explorada em aulas mais avançadas. Por agora, vamos utilizar Type para tipos primitivos e Interface para objetos.
interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
}

type TypeProduto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencherDados3(dados: InterfaceProduto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

// Exercício
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
interface InterfaceEmpresa {
  nome: string;
  fundacao: string;
  pais: string;
}
interface InterfaceData {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: InterfaceEmpresa;
  empresaMontadora: InterfaceEmpresa;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: InterfaceData) {
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
