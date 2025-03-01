// Classes
// As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
console.log(document.constructor); //ƒ HTMLDocument()

class Produto5 {
  tipo = 'produto';
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const livro3 = new Produto5('O Senhor dos Anéis');
console.log(livro3); //Produto5 {tipo: 'produto', nome: 'O Senhor dos Anéis'}


// Modificadores
// O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
class Produto6 {
    // public: é o padrão de qualquer uma
    private tipo = 'produto';
    // private: só pode ser acessada dentro da classe
    protected preco: number;
    // protected: só pode ser acessada dentro da classe e subclasses
    readonly nome: string;
    // readonly: só permite leitura
    constructor(nome: string, preco: number) {
      this.nome = nome;
      this.tipo;
      this.preco = preco;
    }
    getTipo() {
      return this.tipo;
    }
    getPreco() {
      return Produto6.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado
    // e sim da função construtora (classe)
    static transformarPreco(preco: number) {
      return `R$ ${preco}`;
    }
  }
  
  const livro4 = new Produto6('O Senhor dos Aneis', 200);
  console.log(livro4.getTipo()); //produto
  console.log(livro4.getPreco()); //R$ 200
  console.log(livro4.nome); //O Senhor dos Aneis
  console.log(Produto6.transformarPreco(100)); //R$ 100
  