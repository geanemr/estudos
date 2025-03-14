// Generics
// Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.

// Exemplo 1
function retorno<Tipo>(a: Tipo): Tipo {
  return a;
}

retorno('A Game').charAt(0);
// retorno<string>(a: string): string

retorno(200).toFixed();
// retorno<number>(a: number): number

// Exemplo 2
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
  return lista.slice(0, 5);
}

const numbers = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const fruits = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];

const five1 = firstFive<number>(numbers);
const five2 = firstFive<string>(fruits);

// Exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull('André')?.toLowerCase();

// Exemplo 4
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);

// extends
// É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
// Exemplo 1
function extractText<Tipo extends HTMLElement>(el: Tipo): string {
  return el.innerText;
}

const link3 = document.querySelector('a'); //HTMLAnchorElement | null

if (link3) {
  console.log(extractText(link3));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const link4 = $<HTMLAnchorElement>('a')?.href;


// Métodos
// Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
// Define que o retorno será um HTMLAnchorElement
const link5 = document.querySelector<HTMLAnchorElement>('.link');
link5?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    'https://api.origamid.dev/json/notebook.json',
  );
  console.log(notebook.nome);
}
