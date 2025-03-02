"use strict";
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
function mostrarQuantidade(produto) {
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
function mostrarQuantidade2(produto) {
    if (produto.quantidade)
        console.log(produto.quantidade + 20);
}
mostrarQuantidade2(produto01); //30
mostrarQuantidade2(produto02); //24
mostrarQuantidade2(produto03);
const artigo = {
    titulo: 'Como aprender HTML',
    visualizacoes: 3000,
    tags: ['Front End', 'HTML'],
    autor: 'André',
};
artigo.autor;
artigo.descricao;
function handlePost(post) {
    document.body.innerHTML += `${post.autor}`;
}
handlePost(artigo);
function mostrarTitulo(obj) {
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
