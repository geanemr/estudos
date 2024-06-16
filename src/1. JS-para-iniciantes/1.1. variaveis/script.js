console.log("ola");
const nome = "Geane",
  idade = "28";

console.log(idade, nome);

//Hoisting
//São movidas para cima do código, porém o valor atribuído não é movido.
console.log({ pessoa });
var pessoa = "Geane";
// Retorna undefined

var profissao = "Desenvolvedora";
console.log({ profissao });
// Retornar Desenvolvedora

//mudar o valor atribuído
//É possível com var e let, mas não com const
let comida = "pizza"; //se for const não pode mudar
if (comida) {
  comida = undefined;
}
console.log(comida);

//escopo:
//var: global ou de função
//let e const: de bloco{}

//atualização e redeclaração:
//var: pode ambos 
//let: podem ser atualizadas mas não redeclaradas
//const: não podem ser atualizadas nem declaradas novamente

//hoisting
//var: sim (undefined)
//const e let: não são inicializadas (ReferenceError: Cannot access '' before initialization)

//declaração sem inicialização(sem valor inicial)
//var e let: sim
//const: não ('const' declarations must be initialized)

//https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/

//obs: a declaração é simplesmente informar ao compilador sobre a existência de uma variável, enquanto a inicialização é atribuir um valor inicial a essa variável
