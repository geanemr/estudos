// Compilação e Interpretação

/*
 * Linguagens compiladas:
 * - Exemplos: C, C++
 * - Funcionam da seguinte forma: o código-fonte é transformado diretamente em código de máquina
 *   por um compilador específico para o sistema operacional (SO) e arquitetura-alvo.
 * - Geração de executável: o mesmo código precisa ser recompilado para cada plataforma (Windows, Mac, Linux).
 */

/*
 * Linguagens interpretadas:
 * - Exemplos: PHP, JavaScript
 * - Funcionam com um interpretador, que lê e executa o código linha por linha em tempo de execução.
 * - Não há geração de executável direto; o código-fonte precisa ser interpretado por um software adequado
 *   ao sistema operacional (ex: interpretador PHP para Windows, Mac, Linux).
 */

/*
 * Linguagens pré-compiladas + máquina virtual:
 * - Exemplos: Java, C#
 * - O código-fonte é compilado em um código intermediário (C# é compilado para CIL (Common Intermediate Language), que é um tipo de bytecode executado pela CLR (Common Language Runtime)),
 *   que não é específico de plataforma.
 * - Esse código intermediário é executado por uma máquina virtual (JVM para Java, CLR para .NET).
 * - O CLR é específico de cada sistema operacional, permitindo que o mesmo bytecode rode em diferentes plataformas.
 */

// Modelo de Execução .NET

/*
 * 1. O código-fonte C# é compilado para CIL (Common Intermediate Language).
 * 2. O CIL é independente de plataforma, ou seja, o mesmo binário pode rodar em qualquer sistema com suporte ao .NET.
 * 3. A execução final é feita pela CLR (Common Language Runtime), que é específica para cada SO.
 * 4. Durante a execução, a CLR utiliza compilação JIT (Just-In-Time) para transformar o CIL em código de máquina.
 */
