// Babel
// Compilador

// Transforma código novo em código antigo. Ex: const nome = 'Geane'; vira var nome = 'Geane';.

// Browser Suporte
// Para que um browser possa suportar algo novo de JavaScript é preciso que ele esteja atualizado, mas nem todo usuário possui a última versão do browser instalada.

// Can I Use
// O site https://caniuse.com/ mostra em quais browsers a novidade está disponível ou não.

// Polyfill vs Transpiler
// Polyfill
// Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

// Transpiler
// Transforma código novo em código antigo. Ou seja, transforma const em var.

// Instalar Babel
// https://babeljs.io/docs/en/usage

// $ npm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime babel-loader
// Instala o Babel, as configurações padrões e o loader para o Webpack

// webpack.config.js
// Precisamos configurar o webpack, para utilizarmos o babel:

// const path = require('path');

// module.exports = {
//   entry: './js/script.js',
//   output: {
//     path: path.resolve(__dirname, './'),
//     filename: 'main.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             plugins: ['@babel/plugin-transform-runtime'],
//           },
//         },
//       },
//     ],
//   },
// };

// "scripts": {
//   "dev": "webpack --mode development --watch",
//   "build": "webpack --mode production"
// },