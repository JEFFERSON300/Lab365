var itens = [];
var quant = [];
var total = 0;

class CaixaRegistradora {
  constructor(produtos = []) {
    this.produtos = produtos;
  }

  adicionaProduto(codigoBarra, preco, nome) {
    this.codigoBarra = codigoBarra;
    this.preco = preco;
    this.nome = nome;
    this.produtos.push({
      codigoBarra: this.codigoBarra,
      preco: this.preco,
      nome: this.nome,
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
        itens.push(elementos.preco);
        quant.push(quantidade);
      }
    });
  }

  verificarValorTotal() {
    for (let i = 0; i < itens.length; i++) {
      total += itens[i] * quant[i];
    }

    console.log(total);
  }

  fecharConta(dinheiroCliente) {
    let troco = dinheiroCliente - total;
    console.log(troco);
    itens = [];
    quant = [];
    total = 0;
  }
}

let NovaCaixa = new CaixaRegistradora();
NovaCaixa.adicionaProduto(12348, 10.6, "feijão");
NovaCaixa.adicionaProduto(12349, 13.6, "arroz");
NovaCaixa.adicionaProduto(122349, 9.6, "macarrão");
NovaCaixa.novoCliente("Jefferson");
NovaCaixa.registrarProdutoCliente(122349, 2);
NovaCaixa.registrarProdutoCliente(12348, 5);
NovaCaixa.verificarValorTotal();
NovaCaixa.fecharConta(200);
