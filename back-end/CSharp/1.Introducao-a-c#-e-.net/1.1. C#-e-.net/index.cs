// =======================
// Índice
// =======================
// 1. Introdução ao C# e .NET
// 2. Estrutura do .NET
// 3. Implementações do .NET
// 4. Comparação de Implementações do .NET
// 5. Diferença entre .NET Framework, .NET Core e .NET Standard
// 6. Links Úteis

// =======================
// 1. Introdução ao C# e .NET
// =======================
// • C#: Linguagem de programação com regras sintáticas.
// • .NET: Plataforma de desenvolvimento para criar diversos tipos de aplicações.
//   - Suporta várias linguagens de programação.
//   - Link: https://www.microsoft.com/net/learn/what-is-dotnet

// =======================
// 2. Estrutura do .NET
// =======================
// • BCL (Base Class Library): Biblioteca de classes base compartilhada entre linguagens.
// • CLR (Common Language Runtime): Ambiente de execução do .NET.
//   - Responsável por gerenciar a execução, incluindo garbage collection.

// =======================
// 3. Implementações do .NET
// =======================
// • Microsoft .NET Framework (2002): roda somente em Windows.
// • Mono (2004): multiplataformas, usado principalmente em jogos (Unity).
// • Xamarin (2011): multiplataformas (Android, iOS, macOS).
// • .NET Core (2016): moderno, código aberto e multiplataformas.

// =======================
// 4. Comparação de Implementações do .NET
// =======================
// | Tecnologia     | SO                        | Open Source | Propósito                                                                 |
// |----------------|---------------------------|-------------|---------------------------------------------------------------------------|
// | .NET Standard  | -                         | Sim         | Especificação do .NET                                                    |
// | .NET Framework | Windows                   | Não         | Aplicações Windows desktop e web com ASP.NET sobre IIS                   |
// | Mono           | Vários                    | Sim         | Aplicações e jogos multiplataforma                                       |
// | Xamarin        | iOS, Android, Mac OS      | Sim         | Aplicativos móveis híbridos e aplicações desktop para Mac                |
// | .NET Core      | Windows, Linux, Mac OS    | Sim         | Aplicativos console, ASP.NET Core e serviços em nuvem                    |

// =======================
// 5. Diferença entre .NET Framework, .NET Core e .NET Standard
// =======================

// ✅ .NET Framework
// • Implementação original do .NET (desde 2002).
// • Focado em aplicações Windows (desktop e web).
// • Usa ASP.NET, Windows Forms e WPF.
// • Somente para Windows.
// • Não é open source e tem atualizações limitadas atualmente.

// 🌐 .NET Core
// • Implementação moderna, open source, lançada em 2016.
// • Multiplataforma (Windows, Linux, macOS).
// • Focado em performance, nuvem, APIs REST e microserviços.
// • Suporta ASP.NET Core, aplicações console e UI (WinForms e WPF a partir do .NET Core 3).
// • Evoluiu para o .NET 5, 6, 7 e 8 (chamado apenas ".NET").

// 🔄 .NET Standard
// • Não é uma implementação, e sim uma especificação de APIs comuns.
// • Permite criar bibliotecas reutilizáveis entre .NET Framework, .NET Core e Xamarin.
// • Ajuda na portabilidade e compatibilidade de código entre diferentes plataformas .NET.

// 📌 Resumo rápido:
// | Característica       | .NET Framework       | .NET Core            | .NET Standard           |
// |----------------------|----------------------|----------------------|-------------------------|
// | Tipo                 | Implementação        | Implementação        | Especificação           |
// | Plataforma           | Windows              | Multiplataforma      | Multiplataforma         |
// | Código Aberto        | Não                  | Sim                  | Sim                     |
// | Aplicações Desktop   | WinForms, WPF        | WinForms, WPF (Win)  | -                       |
// | Aplicações Web       | ASP.NET              | ASP.NET Core         | -                       |
// | Portabilidade        | Baixa                | Alta                 | Máxima                  |

// =======================
// 6. Links Úteis
// =======================
// • Documentação oficial do .NET: https://docs.microsoft.com/pt-br/dotnet/
// • Introdução ao .NET: https://www.microsoft.com/net/learn/what-is-dotnet
// • Artigo técnico: https://msdn.microsoft.com/pt-br/magazine/mt842506.aspx   
