//STRING
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);


//STR.LENGTH
//Propriedade com o total de caracteres da string.
const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a


//STR.CHARAT(N)
//Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t


//STR.CONCAT(STR2, STR3, ...)
//Concatena as strings e retorna o resultado.
const frase2 = 'A melhor linguagem é ';
const fraseCompleta = frase2.concat(linguagem, '!!');
console.log(fraseCompleta);

//STR.INCLUDES(SEARCH, POSITION)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false


//STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false


//STR.SLICE(START, END)
//Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi


//STR.SUBSTRING(START, END)
//Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
linguagem.substring(3,5); // aS
linguagem.substring(0,4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript


//STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3


//STR.PADSTART(N, STR) E STR.PADEND(N, STR)
//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....


//STR.REPEAT(N)
//Repete a string (n) vezes.
const ta = 'Ta';

ta.repeat(5); // TaTaTaTaTa


//STR.REPLACE(REGEXP|STR, NEWSTR|FUNCTION)
//Troca parte da string por outra. Podemos utilizar uma regular expression ou string.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //Camisas, Bonés, Calças, Bermudas, Vestidos, Saias;

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'


//STR.SPLIT(PADRAO)
//Divide a string de acordo com o padrão passado e retorna uma array.
const arrayItens = listaItens.split(' '); //['Camisas,', 'Bonés,', 'Calças,', 'Bermudas,', 'Vestidos,', 'Saias']

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
//join é um método de Array


//STR.TOLOWERCASE() E STR.TOUPPERCASE()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


//STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
//Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'


//EXERCÍCIOS
// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
let recebimento = 0;

const resultado = transacoes.forEach((transacao) => {
  const number = +transacao.valor.replace('R$', '');

  if(transacao.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal +=number
  } else if (transacao.descricao.slice(0, 4) === 'Rece'){
    recebimento +=number
  } 
})
console.log({taxaTotal}); // {taxaTotal: 297}
console.log({recebimento}); // {recebimento: 148}


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesResultado = transportes.split(';');
console.log(transportesResultado); //['Carro', 'Avião', 'Trem', 'Ônibus', 'Bicicleta']


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlResultado = html.split('span').join('a');
console.log(htmlResultado); 
//<ul>
//<li><a>Sobre</a></li>
//<li><a>Produtos</a></li>
//<li><a>Contato</a></li>
//</ul>


// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
const frase3Resultado = frase3.slice(frase3.length - 1);
console.log(frase3Resultado);


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

console.log(transacoes2);
let soma = 0
const somaTaxas = transacoes2.forEach((item, index) => {
 const itemAjustado = item.trimStart().toLocaleLowerCase()
 if(itemAjustado.includes('taxa'))
  soma +=index
})
console.log({soma}); //{soma: 3}

//OU:
let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLocaleLowerCase().trim().slice(0,4)
  if(item === 'taxa')
    taxasTotal++
})
console.log({taxasTotal}); //{taxasTotal: 3}



