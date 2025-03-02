// keyof
// Indica que o dado é uma chave de uma Interface/Tipo.
interface Prod {
  nome: string;
  preco: number;
}

let chave: keyof Prod;
// let chave: "nome" | "preco";

chave = 'nome';
chave = 'preco';


// typeof
// Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
coord = (x: number, y: number) => {
  return { x, y };
};


// querySelector
// É com o keyof que o querySelector consegue associar uma string com a Interface que ela retorna.
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<T extends keyof Elementos>(
  seletor: T,
): null | Elementos[T] {
  return document.querySelector(seletor);
}

selecionar('video'); //function selecionar<"video">(seletor: "video"): HTMLVideoElement | null
selecionar('a'); //function selecionar<"video">(seletor: "video"): HTMLVideoElement | null


// checkInterface
// O keyof pode ser utilizado para criarmos funções genéricas utilitárias.
async function fetchData(url:string) {
  const response = await fetch(`https://api.origamid.dev/json${url}`)
  return await response.json()
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

async function handleData4() {
  const jogo = await fetchData('/jogo.json');
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
    console.log(jogo.desenvolvedora);
  }

  const livro = await fetchData('/livro.json');
  if (checkInterface<Livro>(livro, 'autor')) {
    console.log(livro.autor);
  }
}

handleData4();

function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}

function checkInterfaceSimples<Interface>(
  obj: unknown,
  key: keyof Interface,
): obj is Interface {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}
