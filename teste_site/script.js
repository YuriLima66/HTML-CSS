// Objeto para armazenar os itens do carrinho
let carrinhoItens = {};

// Função para adicionar produto ao carrinho
function adicionarProduto(produto) {
  // Adiciona o produto ao carrinho
  if (carrinhoItens[produto]) {
    carrinhoItens[produto]++;
  } else {
    carrinhoItens[produto] = 1;
  }

  // Atualiza o contador de carrinho na barra de navegação
  const cartCount = document.getElementById('cartCount');
  let totalItens = 0;
  for (let item in carrinhoItens) {
    totalItens += carrinhoItens[item];
  }
  cartCount.textContent = totalItens;
}

// Função para limpar o carrinho
function limparCarrinho() {
  carrinhoItens = {}; // Limpa o objeto de itens do carrinho
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = '0'; // Atualiza o contador de carrinho na barra de navegação
  exibirItensCarrinho(); // Atualiza a exibição dos itens do carrinho na página
}
