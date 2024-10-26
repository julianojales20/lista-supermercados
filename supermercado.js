var items = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
  var nomeProduto = document.querySelector("input[name=nome_produto]").value;
  var precoProduto = document.querySelector("input[name=price]").value;

  items.push({
    nome: nomeProduto,
    valor: precoProduto
  });

  let listaProdutos = document.querySelector(".lista-produtos");
  let soma = 0;
  listaProdutos.innerHTML = "";
  items.map(function (val) {
    soma += parseFloat(val.valor);
    listaProdutos.innerHTML +=
      `
      <div class="lista-produto-single">
        <h3>` +
      val.nome +
      `</h3>
        <h3 class="price-produto"><span>R$ ` +
      val.valor +
      `</span></h3>
      </div>
    `;
  });

  soma = soma.toFixed(2);

  // Limpar os campos de entrada após adicionar o produto
  document.querySelector("input[name=nome_produto]").value = "";
  document.querySelector("input[name=price]").value = "";

  let elementoSoma = document.querySelector(".soma-produto h1");
  elementoSoma.innerHTML = "R$" + soma;
});

// Função para limpar a lista de produtos e resetar a soma
document.getElementById("limpar").addEventListener("click", () => {
  items = []; // Esvaziar o array de itens
  document.querySelector(".lista-produtos").innerHTML = ""; // Limpar a lista de produtos
  document.querySelector(".soma-produto h1").innerHTML = "R$0.00"; // Resetar a soma para 0.00
  document.querySelector("input[name=nome_produto]").value = ""; // Limpar o campo de nome do produto
  document.querySelector("input[name=price]").value = ""; // Limpar o campo de preço
});
