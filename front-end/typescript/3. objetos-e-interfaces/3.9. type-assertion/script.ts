// as
// Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original.

// Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
const video = document.querySelector('.player') as HTMLVideoElement;
// erro runtime, não existe volume de null
console.log(video.volume); //Uncaught TypeError: Cannot read properties of null (reading 'volume')

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link6 = document.querySelector('.link') as string; //Type 'Element' is not comparable to type 'string'.


// any
// Podemos usar o Type Assertion para definir que um tipo any é qualquer tipo de dado possível.
interface Produto2 {
  nome: string;
  preco: number;
}

async function fetchProduct2() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto2>;
}

// Podemos usar o as em diferentes locais.
async function handleProduct() {
  const produto = await fetchProduct2(); //function fetchProduto(): Promise<void>, não pega a interface
  // produto.nome; //Property 'nome' does not exist on type 'void'
}

async function handleProduct2() {
  const produto = (await fetchProduct2()) as Produto2;
  produto.nome; //assim consigo acessar produto.nome
}

async function handleProduct3() {
  const produto = await fetchProduct2();
  (produto as Produto2).nome; //assim também consigo acessar produto.nome, mas não é o mais indicado
}


// ! non-null operator
// Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.

// Esse é um operador de TS !. e não de JS como o ?.. Durante a compilação ele será removido.
const video2 = document.querySelector('video')!;
// erro runtime, não existe volume de null
video2.volume;

// erro runtime
document.querySelector('a')!.href = 'https://www.origamid.com';


// Outras Sintaxes  
const video3 = document.querySelector('.player') as HTMLVideoElement;
const video4 = <HTMLVideoElement>document.querySelector('.player');
const video5 = document.querySelector<HTMLVideoElement>('.player');
const video6 = document.querySelector('.player');

video3.volume;
video4.volume;
video5?.volume;
(video6 as HTMLVideoElement).volume;