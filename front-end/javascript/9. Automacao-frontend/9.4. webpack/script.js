// Webpack
// Bundler

// Agrupa / processa diversos arquivos e otimiza os mesmos.

// Altamente configurável
// Por isso é complexo.

// https://webpack.js.org/

// Webpack
// $ npm install --save-dev webpack webpack-cli
// Instala o webpack e a cli do mesmo. Ter package.json antes.

// $ npx webpack --entry ./js/script.js -o ./
// Irá agrupar todo o código, otimizar e mais. Utilizar npx é a mesma coisa que utilizar node_modules/.bin/webpack. Facilita para utilizarmos cli's instaladas localmente ao invés de globalmente.

// NPM Scripts
// Permite definirmos uma linha de comando inteira, que será ativada com npm run nomeScript. Não precisamos utilizar o npx aqui.

// "scripts": {
//   "dev": "webpack --mode development --watch --entry ./js/script.js -o ./",
//   "build": "webpack --mode production --entry ./js/script.js -o ./"
// },

// // --mode define o modo da compilação
// // --watch define se deve ficar observando
// // --entry o arquivo de entrada
// // -o a pasta de saída

// Scripts Externos
// Podemos facilmente importar scripts externos instalando os mesmos através do NPM e utilizando o Webpack para fazer o bundler final.

// $ npm install jquery
// $ npm install lodash

// import $ from 'jquery';
// import _ from 'lodash';

// $('nav').hide();

// _.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'Morango', 'Pêra']);
// // Uva