//Escopo
//Quando criamos uma função, a mesma possui acesso à todas as variáveis criadas em seu escopo e também ao escopo pai. A mesma coisa acontece para funções dentro de funções.
let item = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
  }
}

// func1, possui acesso à
// item e item2

// func2, possui acesso à
// item, item2 e item3


//Closures
//A funcao2 possui 4 escopos. O primeiro escopo é o Local, com acesso ao item3. O segundo escopo dá acesso ao item2, esse escopo é chamado de Closure (funcao1) (escopo de função dentro de função). O terceiro escopo é o Script com acesso ao item1 e o quarto escopo é o Global/Window.
let item1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}


//Debugging
//É possível "debugarmos" um código JavaScript utilizando ferramentas do browser ou através do próprio Visual Studio Code. Se o código possuir qualquer Web API, o processo deve ser feito no Browser. Plugins podem interferir no debug dentro do browser.
debugger; // adicione a palavra debugger
let outroItem1 = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }
  funcao2();
}

// pelo browser: 
// 1. Abrir as ferramentas de desenvolvedor do navegador
// 2. Navegar até a guia "Sources" ou "Origens"
// 3. Localizar o arquivo JavaScript que deseja depurar e clicar nele para abrir
// 4. Definir pontos de interrupção clicando na linha de código onde deseja pausar a execução (ou usar a palavra debugger no código)
// 5. Atualizar a página para iniciar o processo de depuração

// pelo Visual Studio Code:
// 1. Abrir o arquivo JavaScript que deseja depurar no Visual Studio Code
// 2. Adicionar pontos de interrupção clicando na margem esquerda do editor, na linha de código onde deseja pausar a execução
// 3. Iniciar o depurador clicando no botão "Play" ou pressionando F5
// 4. O código será executado até encontrar o primeiro ponto de interrupção, onde a execução será pausada
// 5. Usar as ferramentas de depuração do Visual Studio Code, como inspecionar variáveis, percorrer o código linha a linha e visualizar a pilha de chamadas, para analisar e corrigir problemas no código

//para casos em que está sendo utilizada uma API da web, deve ser utilizado o navegador


//Caso Clássico
//Um dos casos mais clássicos para a demonstração de closures é através da criação de uma função de incremento. É como se a função incrementar carregasse uma mochila chamada contagem, onde uma referência para as suas variáveis estão contidas na mesma.
debugger
function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  }
}

const ativarIncrementar = contagem();
ativarIncrementar(); // 1
ativarIncrementar(); // 2
ativarIncrementar(); // 3


//Closures na Real
//Todas as funções internas da Factory Function possuem uma closure de allElements. As mesmas contém uma referência à variável elements declarada dentro do escopo da função.