"use strict";
// class
// Em JavaScript, Classes class são funções construtoras que geram objetos. Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
class Produto2 {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro2 = new Produto2("A Guerra dos Tronos", 200);
console.log({ livro2 }); //livro2: Produto2 {nome: 'A Guerra dos Tronos', preco: 200}
//   instanceof
// Existem funções que retornam diferentes tipos de objetos. Com a palavra-chave instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    jogadores;
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo(1);
    }
    return null;
}
const produto2 = buscarProduto("O Hobbit");
if (produto2 instanceof Livro) {
    console.log(produto2.autor); //J. R. R. Tolkien
}
// extends
// O instanceof verifica se a função construtora herda de outra (extends).
class Produto3 {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro3 extends Produto3 {
    autor;
    constructor(nome, autor) {
        super(nome); //para recriar o construtor de Produto3
        this.autor = autor;
    }
}
class Jogo3 extends Produto3 {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto3(busca) {
    if (busca === 'O Hobbit') {
        return new Livro3('O Hobbit', 'J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo3('Dark Souls', 1);
    }
    return null;
}
const produto3 = buscarProduto3('O Hobbit');
const produto4 = buscarProduto3('Dark Souls');
if (produto3 instanceof Produto3) {
    console.log(produto3.nome); //O Hobbit
}
if (produto4 instanceof Produto3) {
    console.log(produto4.nome); //Dark Souls
}
//Exercício
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    const newLink = link.href.replace('http', 'https');
    console.log({ newLink }); //{newLink: 'https://www.origamid.com/'}
}
