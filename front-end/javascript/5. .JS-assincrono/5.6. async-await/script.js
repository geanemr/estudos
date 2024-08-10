//async / await
//A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O await irá indicar a promise que devemos esperar (await só vai na frente de partes que retornam promessas). Faz parte do ES8.
async function clients() {
  const response = fetch('./clients.json')
  console.log(response); //sem o await: Promise {<pending>}

  const responseWithAwait = await fetch('./clients.json')
  console.log(responseWithAwait); //com o await vem o response da promise: Response {type: 'basic', url: 'http://127.0.0.1:5500/front-end/javascript/5.%20.JS-assincrono/5.6.%20async-await/clients.json/', redirected: false, status: 404, ok: false, …}
  
}
clients()

//outro exemplo:
const span = document.querySelector('span')

async function puxarDados() {
  const dadosResponse = await fetch('./clients.json');
  const dadosJSON = await dadosResponse.json();

  const clientsText = dadosJSON.clients.map(client => `${client.name} - ${client.email}`)

  span.innerText = clientsText
  
}

puxarDados();


//then / async
//A diferença é uma sintaxe mais limpa.
function iniciarFetch() {
  fetch('./clients.json')
  .then(dadosResponse => dadosResponse.json())
  .then(dadosJSON => {
    console.log('dadosResponseComThen:', dadosJSON.clients);
  })
}
iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch('./clients.json');
  const dadosJSON = await dadosResponse.json();
  console.log("dadosResponseComAsyncAwait:",dadosJSON.clients);
}
iniciarAsync()


//Try / Catch
//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função.
async function puxarDados() {
  try {
    const dadosResponse = await fetch('./clients.json');
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON);
    
  }
  catch(erro) {
    console.log('erro:',erro); //SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  }
}
puxarDados();


//Iniciar Fetch ao Mesmo Tempo
//Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do fetch para transformarmos a response em json.
async function iniciarAsyncFetch() {
  const dadosResponse = fetch('./dados.json');
  const clientesResponse = fetch('./clients.json');

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();

  console.log('dadosJSON:', dadosJSON);
  console.log('clientesJSON:', clientesJSON);
}
iniciarAsyncFetch();


//Promise
//O resultado da expressão à frente de await tem que ser uma promise. E o retorno do await será sempre o resultado desta promise.
async function asyncSemPromise() {
  // Console não irá esperar.
  await setTimeout(() => console.log('Depois de 1s'), 1000);
  console.log('acabou');
}
asyncSemPromise();


//agora sim irá esperar
async function iniciarAsync() {
  await new Promise(resolve => {
    setTimeout(() => resolve(), 2000)
  });
  console.log('Depois de 2s');
}
iniciarAsync();



