// Duck Typing
// Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.
// "Se parece com um pato, nada como um pato e grasna como um pato, então provavelmente é um pato." - Wikipédia
interface Produto3 {
  nome: string;
  quantidade: number;
}

const produto01 = {
  nome: 'Notebook',
  quantidade: 10,
  cor: 'azul',
};

const produto02 = {
  nome: 'Geladeira',
  quantidade: 4,
  freezer: true,
};

const servico1 = {
  nome: 'Instalação',
};

function mostrarQuantidade(produto: Produto3) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto01); //30
mostrarQuantidade(produto02); //24

// erro, não possui quantidade
// mostrarQuantidade(servico1);


// Partial
// O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.
// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
const produto03 = {
  nome: 'Instalação',
};

function mostrarQuantidade2(produto: Partial<Produto3>) {
  if(produto.quantidade)
  console.log(produto.quantidade + 20);
}

mostrarQuantidade2(produto01); //30
mostrarQuantidade2(produto02); //24
mostrarQuantidade2(produto03);


// [key: string]: unknown;
// Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.
interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: 'Como aprender HTML',
  visualizacoes: 3000,
  tags: ['Front End', 'HTML'],
  autor: 'André',
};

artigo.autor;
artigo.descricao;

function handlePost(post: Post) {
  document.body.innerHTML += `${post.autor}`;
}

handlePost(artigo);


// Record
// O Record define a interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico.
type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ('titulo' in obj) {
    console.log(obj.titulo);
  }
}

// Erros:
// mostrarTitulo("string"); //Argument of type 'string' is not assignable to parameter of type 'ObjetoLiteral2'
// mostrarTitulo(200); //Argument of type 'number' is not assignable to parameter of type 'ObjetoLiteral2'
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
  titulo: 'teste',
});

// Utility Types
// Lista completa dos utility types.

// https://www.typescriptlang.org/docs/handbook/utility-types.html