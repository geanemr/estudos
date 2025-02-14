// string, number e boolean são tipos básicos do TypeScript (primitivos).
const frase: string = 'Front End';
const valor: number = 500;
const condi: boolean = valor > 100;
console.log(condi) //true


// typeof
// typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado. Os possíveis valores retornados por typeof são: string, number, boolean, function, object, undefined, bigint e symbol. O typeof funciona como um type guard.
if (typeof valor === 'number') {
  console.log('valor é number');
}
if (typeof condi === 'boolean') {
  console.log('condi é boolean');
}


// String, Number e Boolean
// Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';

console.log('frase1:', typeof frase1); //object
console.log('frase2:', typeof frase2); //string
console.log('frase3:', typeof frase3); //string