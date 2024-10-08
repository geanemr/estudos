//Subclasses
//É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2);
honda.empinar(); //Empinou com 2 rodas


//Métodos
//Podemos escrever por cima de um método herdado.
class Veiculo2 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto2 extends Veiculo2 {
  acelerar() {
    console.log('Acelerou muito');
  }
}

const yamaha = new Moto2(2);
yamaha.acelerar(); //Acelerou muito


//Super
//É possível utilizar a palavra chave super para falarmos com a classe pai e acessarmos os seus métodos e propriedades.
class Veiculo3 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto3 extends Veiculo3 {
  acelerar() {
    super.acelerar();
    console.log('Muito');
  }
}

const suzuki = new Moto3(2);
suzuki.acelerar(); //Acelerou //Muito


//Super e Constructor
//Podemos utilizar o super para estendermos o método constructor.
class Veiculo4 {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto4 extends Veiculo4 {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}

const harley = new Moto4(4, 'Gasolina', true);
console.log(harley); //Moto4 {rodas: 4, combustivel: 'Gasolina', capacete: true}
