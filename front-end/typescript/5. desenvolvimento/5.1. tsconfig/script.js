"use strict";
// tsconfig
// Existem diversas opções do compilador do TypeScript. Algumas vão influenciar no código gerado e outras nas indicações de erros pelo TS.
// tsconfig.json
// {
//   // Compila ao salvar
//   "compileOnSave": true,
//   // Opções do compilador
//   "compilerOptions": {
//     // Versão do JavaScript gerado
//     "target": "ESNext",
//     // Versão do type module
//     "module": "ESNext",
//     // Vai usar bibliotecas do ESNext e do DOM
//     "lib": ["ESNext", "DOM"],
//     // Gera source map ao compilar
//     "sourceMap": true,
//     // Não compilar
//     "noEmit": false,
//     // Permite importar arquivos JavaScript
//     "allowJs": true,
//     // Remove os comentários
//     "removeComments": true,
//     // Modo estrito (inclui outras opções)
//     "strict": true,
//     // [strict] É necessario indicar o tipo de dado dos que não são inferidos
//     "noImplicitAny": true,
//     // [strict] Adiciona "use strict" ao JavaScript
//     "alwaysStrict": true,
//     // [strict] Verifica a possibilidade do dado ser null | undefined
//     "strictNullChecks": true,
//     // [strict] Necessário declarar o this
//     "noImplicitThis": true,
//     // Indica a possibilidade de retorno undefined
//     "noImplicitReturns": true,
//     // Indica parâmetros e variáveis que não foram utilizados
//     "noUnusedLocals": true,
//     "noUnusedParameters": true,
//     // Diretórios dos arquivos compilados
//     "outDir": "dist"
//   },
//   // Compila o que estiver na pasta src
//   "include": ["src"],
//   // Não compila o que estiver na pasta node_modules
//   "exclude": ["node_modules"]
// }
// Demais Configurações
// https://www.typescriptlang.org/tsconfig
//Configuração Simples:
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true,
//     "sourceMap": true,
//     "allowJs": true,
//     "removeComments": true,
//     "noImplicitReturns": true,
//     "outDir": "dist"
//   },
//   "include": ["src"],
//   "exclude": ["node_modules"]
// }
