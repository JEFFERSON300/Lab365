var itens = [];
var quant = [];
var total = 0;
var carrinho = [];

class CaixaRegistradora {
  constructor(produtos = []) {
    this.produtos = produtos;
  }

  adicionaProduto(codigoBarra, preco, nome, estoque) {
    this.codigoBarra = codigoBarra;
    this.preco = preco;
    this.nome = nome;
    this.estoque = estoque;

    this.produtos.push({
      codigoBarra: this.codigoBarra,
      preco: this.preco,
      nome: this.nome,
      estoque: this.estoque,
    });
  }

  novoCliente(nomeCliente) {
    if (localStorage.getItem("name") != nomeCliente) {
      localStorage.setItem("name", nomeCliente);
    }
  }

  registrarProdutoCliente(codigoBarra, quantidade) {
    this.produtos.forEach((elementos) => {
      if (elementos.codigoBarra == codigoBarra) {
        carrinho.push({
          codigoBarra: codigoBarra,
          quantidade: quantidade,
        });

        localStorage.setItem(
          localStorage.getItem("name"),
          JSON.stringify(carrinho)
        );

        itens.push(elementos.preco);
        quant.push(quantidade);
      }
    });
  }

  verificarValorTotal() {
    for (let i = 0; i < itens.length; i++) {
      total += itens[i] * quant[i];
    }

    console.log(`Valor total dos produtos ${total}`);
  }

  fecharConta(dinheiroCliente) {
    let troco = dinheiroCliente - total;
    console.log(`Troco ${troco}`);
    let dadosCompra = JSON.parse(
      localStorage.getItem(localStorage.getItem("name"))
    );

    dadosCompra.forEach((elementos) => {
      const index = this.produtos.findIndex(
        (e) => e.codigoBarra === elementos.codigoBarra
      );
      this.produtos[index].estoque -= elementos.quantidade;
    });

    localStorage.removeItem(localStorage.getItem("name"));
    itens = [];
    quant = [];
    total = 0;
  }
}

let NovaCaixa = new CaixaRegistradora();
NovaCaixa.adicionaProduto(12348, 10.6, "feijão", 20);
NovaCaixa.adicionaProduto(12349, 13.6, "arroz", 15);
NovaCaixa.adicionaProduto(122349, 9.6, "macarrão", 10);
NovaCaixa.novoCliente("Jefferson");
NovaCaixa.registrarProdutoCliente(122349, 2);
NovaCaixa.registrarProdutoCliente(12348, 5);
NovaCaixa.registrarProdutoCliente(12349, 3);
NovaCaixa.verificarValorTotal();
NovaCaixa.fecharConta(200);
