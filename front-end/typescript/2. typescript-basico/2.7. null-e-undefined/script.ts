// null
// null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.
const buttons = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();
button?.click();

console.log(typeof null);


// undefined
// undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total3;
console.log(total); // undefined

const data2 = {};
console.log(data.nome);


// Propriedades Opcionais
// Podemos definir propriedades opcionais utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.
interface Product {
  nome?: string;
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
};

jogo.nome?.toLowerCase();
livro.nome?.toLowerCase();


// strictNullChecks
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.

// tsconfig.json

// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }