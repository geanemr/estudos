"use strict";
// Functions
// A interface de uma função é definida durante a sua declaração.
function soma(a, b, c) {
    return a + b + (c ? c : 0);
}
soma(3, 4);
soma(3, 4, 1);
const subtracao = (a, b) => a - b;
subtracao(10, 2);
// Void
// No JavaScript, uma função sem return irá retornar undefined. No TypeScript o retorno é definido como void. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.
function pintarTela(cor) {
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
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
if (isString("teste")) {
    //function isString(value: any): true | undefined
    console.log("É string");
}
function calcular(forma) { }
function normalizar2(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
normalizar2(" Produto ");
normalizar2(["Banana ", " UVA"]);
function $$(seletor) {
    return document.querySelector(seletor);
}
$$("a")?.href;
$$("video")?.volume;
$$(".teste")?.innerHTML;
function arredondar(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        return Math.ceil(Number(value)).toString();
    }
}
console.log(arredondar('211.5'));
console.log(arredondar(211.5));
