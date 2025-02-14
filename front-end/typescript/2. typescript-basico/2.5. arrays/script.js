"use strict";
// Arrays
// Uma array é definida com o tipo de dado(s) que ela possui, seguida por [];
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue10(numeros)); //(3) [30, 40, 30]
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'string');
}
console.log(filtrarValores(valores)); // ['Taxas', 'Produto']
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
// Sintaxe Alternativa
// Existe uma sintaxe alternativa, onde usamos Array<type>. Sendo type o tipo de dado dentro da array.
const numeros2 = [10, 30, 40, 5, 3, 30];
function maiorQue102(data) {
    return data.filter((n) => n > 10);
}
//Exercício
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
    <div>
      <h2 style="color:${curso.nivel === 'iniciante' ? 'blue' : 'red'}">Curso: ${curso.nome}</h2>
      <p>${curso.horas} horas</p>
      <p>${curso.aulas} aulas</p>
      <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>${curso.tags.join(', ')}</p>
      <p>${curso.idAulas.join(', ')}</p>
      <p>${curso.nivel}</p>
    </div>
    `;
    });
}
