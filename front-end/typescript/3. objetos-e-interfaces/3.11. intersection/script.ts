// Intersection
// Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types.
type Produto4 = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto4) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});


// Adicionar Propriedades
// É possível adicionar uma propriedade a uma interface/tipo que já definido.

// Com Interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro { //pode repetir o nome
  preco: number;
}

const dado1: InterfaceCarro = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

// Com Type
type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & { //não pode repetir o nome
  preco: number;
};

const dado2: TipoCarroComPreco = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};


// Window
// Se definimos uma propriedade global, podemos "extender" a interface de Window, apenas redeclarando a interface.
interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId);