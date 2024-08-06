//new Date()
//O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.
const now = new Date();
now;
// Semana Mês Dia Ano HH:MM:SS GMT
now.getDate() // Dia
now.getDay() // Dia da Semana ex: 5 = Fri (começa no 0=Dom)
now.getMonth() // Número mês (começa no 0=Janeiro)
now.getFullYear() // Ano
now.getHours() // Hora (pega a hora que está no dispositivo)
now.getMinutes() // Minutos 
now.getTime() // ms desde 1970
now.getUTCHours() - 3 // Brasília (pega o horário UTC. Mais preciso que getHours)


//getTime()
//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
const agora = new Date();
agora.getTime(); 

// total de dias desde 1 de janeiro de 1970
const diasPassados = Math.floor(agora.getTime() / (24 * 60 * 60 * 1000));
console.log(diasPassados); //19939


//Dias até
//Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.
const promocao = new Date('August 14 2024 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora);
const diasPromocao = converterEmDias(promocao);

const faltam = Math.floor(diasPromocao - diasAgora);
console.log(faltam); //10
