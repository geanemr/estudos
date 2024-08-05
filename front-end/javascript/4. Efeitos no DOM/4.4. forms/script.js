//Forms
//É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
const lista = document.forms; // lista com os formulários (HTMLCollection)
const contato = document.forms.contato; // form com nome contato (form#contato)
const elements = document.forms.contato.elements; // elementos
const value = document.forms[0].elements[0].value; // valor do primeiro


//Values
//A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.
const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp);


//Validação
//O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modificar com setCustomValidity('')
function handleChange(event) {
  const target = event.target;
  if(!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
    target.setCustomValidity('Esse campo é super importante')

  } else {
    target.classList.remove('invalido');
  }
}
form.addEventListener('change', handleChange);

//select
const select = document.querySelector('select');
function handleChangeSelect(event) {
  document.body.style.backgroundColor = event.target.value;
}
select.addEventListener('change', handleChangeSelect);


//diferentes inputs
const inputs = document.querySelector('.diferentes-inputs');

function handleChangeInputs(event) {
  console.log(event.target.value)
}
inputs.addEventListener('change', handleChangeInputs);

//checkbox
//Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
const check = document.querySelector('.check');
function handleChangeCheck(event) {
  if(event.target.checked)
    console.log(event.target.value);
}
check.addEventListener('change', handleChangeCheck);


//Radio
//A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.
const radio = document.querySelector('.radio');
function handleChangeRadio(event) {
  if(event.target.checked)
    console.log(event.target.value);
}
radio.addEventListener('change', handleChangeRadio);


//Pegando todos os valores
//Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.
const dados = {};
function handleChangeValues(event) {
  dados[event.target.name] = event.target.value;
}
form.addEventListener('change', handleChangeValues);



