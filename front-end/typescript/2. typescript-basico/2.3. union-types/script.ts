// Union Types
// É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.
let total2: string | number = 200;
total2 = '300';


// Funções
// Funções podem receber parâmetros com diferentes tipos e também podem retornar diferentes tipos de dados.
function isNumber(value: string | number) {
    if (typeof value === 'number') {
      return true;
    } else {
      return 'Não é número';
    }
  }

console.log(isNumber("teste")); //Não é número


// DOM
// Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existe ou não.
// Retorna HTMLButtonElement | null
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();


//Exercício
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

const toNumber = (value:number | string) => {
    if(typeof value === "number") {
        return value
    }
    if(typeof value === "string") {
        return Number(value)
    } else {
        throw "value deve ser um número ou uma string"
    }
}
console.log(toNumber(12)); //12
console.log(toNumber("20")); //20
// console.log(toNumber(true)); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'



