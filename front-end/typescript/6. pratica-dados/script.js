"use strict";
// Manipulação de Dados
// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json
// 2 - Mostre em uma tabela os dados de cada transação.
// 3 - Calcule:
// 3.1 - Soma total dos valores
// 3.2 - Transações por meio de pagamento.
// 3.3 - Transações por status.
// 3.4 - Total de vendas por dia da semana.
// 3.5 - Dia da semana com mais vendas.
// 4 - Mostre as estatísticas na tela.
// 5 - Organize o código em pequenos módulos.
// 6 - Normalize os dados da API se achar necessário.
async function fetchTransactions(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Erro:" + response.status);
        return await response.json();
    }
    catch (error) {
        if (error instanceof Error)
            console.error("Erro:" + error.message);
        return null;
    }
}
async function showTransactions() {
    const data = await fetchTransactions("https://api.origamid.dev/json/transacoes.json");
    data?.forEach((item) => {
        document.body.innerHTML += `
    <table class="tabela">
  <thead>
    <tr>
      <th>Status</th>
      <th>ID</th>
      <th>Data</th>
      <th>Nome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${item.Status}</td>
      <td>${item.ID}</td>
      <td>${item.Data}</td>
      <td>${item.Nome}</td>
    </tr>
  </tbody>
  </tfoot>
</table>
        `;
    });
}
showTransactions();
