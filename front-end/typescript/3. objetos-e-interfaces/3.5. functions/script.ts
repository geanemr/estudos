// Functions
// A interface de uma função é definida durante a sua declaração.
function soma(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
soma(3, 4);
soma(3, 4, 1);

const subtracao = (a: number, b: number): number => a - b;

subtracao(10, 2);

type Callback = (event: MouseEvent) => void;

// Void
// No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor: string) {
  document.body.style.background = cor;
}

pintarTela("black");

// Erro, void não pode ser verificado
// if (pintarTela('black')) {
// }

const bttn = document.querySelector("button");

// Erro, void não pode ser verificado
// if (bttn && bttn.click()) {
// }

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

if (isString("teste")) {
  //function isString(value: any): true | undefined
  console.log("É string");
}

// Never
// O never é utilizado em casos onde a função gera um erro ou termina a aplicação.
// function abortar(mensagem: string): never {
//   throw new Error(mensagem);
// }

// abortar('Um erro ocorreu');
// console.log('Tente novamente');

// Métodos
// Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.
interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {}

// Overload
// Existem funções que retornam diferentes dados dependendo do argumento.

// Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

// O Overload deve ser compatível com a função original.
// Exemplo 1
function normalizar2(valor: string): string;
function normalizar2(valor: string[]): string[];
function normalizar2(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

normalizar2(" Produto ");
normalizar2(["Banana ", " UVA"]);

// Exemplo 2
function $$(seletor: "video"): HTMLVideoElement | null;
function $$(seletor: "div"): HTMLDivElement | null;
function $$(seletor: "a"): HTMLAnchorElement | null;
function $$(seletor: string): Element | null;
function $$(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$$("a")?.href;
$$("video")?.volume;
$$(".teste")?.innerHTML;

//Exercício
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondar(valor: string): string; //overload para poder utilizar os métodos de string
function arredondar(valor: number): number; //overload para poder utilizar os métodos de number
function arredondar(value: number | string): string | number {
  if (typeof value === "number") {
    return Math.ceil(value);
  } else {
    return Math.ceil(Number(value)).toString();
  }
}
console.log(arredondar('211.5'));
console.log(arredondar(211.5));


