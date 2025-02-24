// Array
// Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().
async function fetchCursos2() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos2();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}


// Type Predicate
// TypeScript não executa JavaScript

// Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função isArray consegue ser usada como Type Guard?

// Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.
function isString2(value: unknown): value is string {
  return typeof value === 'string';
}

function handleData2(data: unknown) {
  if (isString2(data)) {
    data.toUpperCase();
  }
}

handleData2('Origamid');
handleData2(200);


// Objetos
// O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
async function fetchProduto2() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto2(json);
}
fetchProduto2();

interface Produto2 {
  nome: string;
  preco: number;
}

function isProduto(value: unknown): value is Produto2 {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto2(data: unknown) {
  if (isProduto(data)) {
    console.log(data);
  }
}


// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fecthCursosExercicio() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCursos2(json);
}

interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: string;
}

function isCurso(value: unknown): value is Cursos { //funçãtypeguard, "value is Curso" é Type Predicate
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}
function handleCursos2(cursos: unknown) {
  if (Array.isArray(cursos)) {
    cursos.filter(isCurso).forEach((item) => {
      document.body.innerHTML += document.body.innerHTML += `
      <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(", ")}</p>
      </div>
    `;
    });
  }
}

fecthCursosExercicio();