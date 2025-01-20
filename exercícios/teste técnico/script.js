// Técnica:

// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
let indice = 13;
let soma = 0;

for (let k = 0; k < indice; k++) {
  soma += k + 1;
}
console.log({ soma }); //91

//----------------------------------------------------------------------------------------

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
function isFibonacci(num) {
  if (num < 0) return false;
  if (num === 0 || num === 1) return true;

  let a = 0;
  let b = 1;

  for (let c = a + b; c <= num; c = a + b) {
    if (c === num) return true;
    a = b;
    b = c;
  }

  return false;
}
const num = 6; //exemplo

if (isFibonacci(num)) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}
//resultado:
//6 não pertence à sequência de Fibonacci.

//----------------------------------------------------------------------------------------

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const fs = require("fs");

fs.readFile("dados.json", "utf8", (err, data) => {
  const faturamento = JSON.parse(data);

  const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

  // Menor e o maior valor de faturamento
  const menorValor = Math.min(...diasComFaturamento.map((dia) => dia.valor));
  const maiorValor = Math.max(...diasComFaturamento.map((dia) => dia.valor));

  // Média mensal de faturamento
  const somaFaturamento = diasComFaturamento.reduce(
    (acc, dia) => acc + dia.valor,
    0
  );
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  // Número de dias com faturamento superior à média mensal
  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > mediaMensal
  ).length;

  console.log("Menor valor de faturamento:", menorValor);
  console.log("Maior valor de faturamento:", maiorValor);
  console.log(
    "Número de dias com faturamento acima da média mensal:",
    diasAcimaDaMedia
  );
});
//resultado:
// Menor valor de faturamento: 373.7838
// Maior valor de faturamento: 48924.2448
// Número de dias com faturamento acima da média mensal: 10

//----------------------------------------------------------------------------------------

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valorTotal = Object.values(faturamentoPorEstado).reduce(
  (acc, valor) => acc + valor,
  0
);

const percentualPorEstado = {};
for (const estado in faturamentoPorEstado) {
  percentualPorEstado[estado] = (
    (faturamentoPorEstado[estado] / valorTotal) *
    100
  ).toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentualPorEstado) {
  console.log(`${estado}: ${percentualPorEstado[estado]}%`);
}
//resultado:
// Percentual de representação por estado:
// SP: 37.53%
// RJ: 20.29%
// MG: 16.17%
// ES: 15.03%
// Outros: 10.98%

//----------------------------------------------------------------------------------------

// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
let fruta = "abacaxi";

const reversao = (str) => {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
};

console.log(reversao(fruta)); // ixacaba
