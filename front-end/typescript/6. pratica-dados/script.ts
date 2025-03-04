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

async function fetchTransactions() {
  const response = await fetch("https://api.origamid.dev/json/transacoes.json");
  const json = await response.json();
  showTransactions(json);
}

interface Transaction {
  Status: string;
  ID: number;
  Data: Date;
  Nome: string;
}

function showTransactions(data: Transaction) {
  const newArray = Object.entries(data);
  console.log(newArray[1][1]);
  
  newArray.forEach((item) => {
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
      <td>${item[1].Status}</td>
      <td>${item[1].ID}</td>
      <td>${item[1].Data}</td>
      <td>${item[1].Nome}</td>
    </tr>
  </tbody>
  </tfoot>
</table>
        `;
  });
}

fetchTransactions();
