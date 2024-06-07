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
