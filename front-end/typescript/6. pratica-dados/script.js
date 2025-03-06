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
function normalizeTransaction(transaction) {
    return {
        status: transaction.Status,
        id: transaction.ID,
        data: stringtoDate(transaction.Data),
        nome: transaction.Nome,
        email: transaction.Email,
        moeda: transaction["Valor (R$)"],
        valor: normalizeCurrency(transaction["Valor (R$)"]),
        pagamento: transaction["Forma de Pagamento"],
        novo: Boolean(transaction["Valor Novo"]),
    };
}
/**
 * recebe string '1.200,50' retorna number;
 */
function normalizeCurrency(moeda) {
    const number = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
function stringtoDate(texto) {
    const [data, tempo] = texto.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minuto] = tempo.split(":").map(Number);
    return new Date(ano, mes - 1, dia, hora, minuto);
}
async function showTransactions() {
    const data = await fetchTransactions("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    const tbody = document.querySelector("tbody");
    if (!tbody)
        return;
    transactions.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.id}</td>
      <td>${item.status}</td>
      <td>${item.data.toLocaleDateString("pt-BR")}</td>
    `;
        tbody.appendChild(row);
    });
}
showTransactions();
