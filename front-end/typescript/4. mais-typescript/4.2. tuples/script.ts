// Tuples
// Tuples são arrays que possuem dados em posições fixas.
const produto0: (string | number)[] = ["Notebook", 2500];
const produto1: [string, number] = ["Notebook", 2500];

const nome1 = produto0[0]; // string | number
const nome2 = produto1[0]; // string

const [nome, preço] = produto1;

// as const
// Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.
function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}

const button3 = getText("button");

if (button3) {
  //const button3: readonly [HTMLElement, string] | null
  const [buttonElement, buttonText] = button3;
  console.log(button3); //(2) [button, 'Clique aqui']
  console.log(buttonElement); //button
  console.log(buttonText); //'Clique aqui'
}

//Exercício
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function getVendas(){
  const response = await fetch("https://api.origamid.dev/json/vendas.json")
  const json = await response.json()
  sum(json)
}

interface ProdutoDetalhes {
  marca: string;
  cor: string
}

type Vendas = [string, number, string, ProdutoDetalhes]

function sum(data:Vendas[]) {
  const totalvendas = data.reduce((curr, acc) => {
    return curr + acc[1]
  },0)

  document.body.innerHTML += `
  <p>R$${totalvendas}</p>`
}

getVendas()