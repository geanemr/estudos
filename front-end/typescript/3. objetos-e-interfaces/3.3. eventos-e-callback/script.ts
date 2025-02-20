// Eventos
// Passamos o evento como uma string e uma função de callback no método addEventListener. A função de callback possui um parâmetro que faz referência ao evento executado.
const btn = document.querySelector("button");

function handleClick(event: MouseEvent) {
  console.log(event);
}

btn?.addEventListener("click", handleClick);

function handleScroll(event: Event) {
  console.log(event);
}

window.addEventListener("scroll", handleScroll);


// Event e instanceof
// Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event.
function ativarMenu(event: Event) {
  console.log(event.type);
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("pointerdown", ativarMenu);


// this
// Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JavaScript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.
function ativarMenu2(this: HTMLButtonElement, event: MouseEvent) {
  console.log("this.innerText:", this.innerText); //Login
  console.log("event:", event); //PointerEvent
}

const btn2 = document.querySelector("button");
btn2?.addEventListener("click", ativarMenu2);


// target e currentTarget
// O TypeScript não executa o JavaScript, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois esse é o tipo mais comum entre os elementos que podem receber um evento.
function ativarMenu3(event: Event) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    elemento.style.background = "red";
  }
}

const btn3 = document.querySelector("button");
btn3?.addEventListener("click", ativarMenu3);

window.addEventListener("keydown", ativarMenu3);

// Exercício
// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const menuBtn = document.getElementById("btn-mobile");
menuBtn?.addEventListener("pointerdown", toggleMenu);

function toggleMenu(event: PointerEvent) {
  const nav = document.getElementById("nav");
  const btnMenu = event.currentTarget;

  if (btnMenu instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      btnMenu.setAttribute("aria-expanded", "false");
      btnMenu.setAttribute("aria-label", "Abrir Menu");
    } else {
      nav.classList.add("active");
      btnMenu.setAttribute("aria-expanded", "true");
      btnMenu.setAttribute("aria-label", "Fechar Menu");
    }
  }
}

