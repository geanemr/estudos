// Any
// O any indica que o dado pode conter qualquer tipo de dado do TypeScript. Devemos evitar ao máximo o uso do any, pois o mesmo remove todas as seguranças e conveniências que o TS fornece.
function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}

normalizar(' DeSIGN');
//normalizar(200); //o erro só aparece no console, TypeError: texto.trim is not a function


// Any Implicito
// Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.
// function normalizar(texto) { //Parameter 'texto' implicitly has an 'any' type.
//   return texto.trim().toLowerCase();
// }


// Uso do Any
// Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json');


// Any e Erros
// Usar o any pode quebrar a sua aplicação.
interface Curso {
  nome: string;
  horas: number;
}

function todosCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const data: any = 'o any gera problemas';

todosCursos(data);