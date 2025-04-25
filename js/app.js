// Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, exiba uma mensagem de erro apropriada.






let totalGeral = 0;
limpar();



function adicionar() {
  // Recuperar os valores dos inputs: nome do produto, preço e quantidade.
  const produto = document.getElementById('produto').value;


  // Verificar se o produto selecionado é válido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
}


// Verificar se a quantidade inserida é válida
if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}
  const nomeProduto = produto.split('-')[0];
  const precoProduto = parseFloat(produto.split('R$')[1].trim());
  const quantidade = parseInt(document.getElementById('quantidade').value);
  // Calcular o preço total do produto.
  const precoTotal = quantidade * precoProduto;
  // Adicionar produtos no carrinho.
  const carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotal.toFixed(2,2)}</span>
    </section>`;
  // Atualizar o total da compra.
  totalGeral += precoTotal;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$${totalGeral.toFixed(2,2)}`;
  // Limpar os inputs.
  document.getElementById('produto').value = '';
  document.getElementById('quantidade').value = '';
  // Atualizar o carrinho de compras.
  document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0,00';
}
