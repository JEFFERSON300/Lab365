var items = [];
var priceItem = 0;
var cont = 0;

do {
  priceItem = prompt("Digite o valor do produto e 0 para final da compra");
  items.push(Number(priceItem));
} while (priceItem != 0);

items.pop();
let totalSum = items.reduce((total, number) => {
  return total + number;
});
let moneyClient = prompt(
  `O soma dos itens é ${totalSum}. Qual o valor em dinheiro que o cliente tem?`
);

let rest = moneyClient - totalSum;

// Impressão final //

/* Ex:
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
*/

console.log("Lojas Tabajara");

items.forEach((element) => {
  cont++;
  console.log(`Produto ${cont}: R$ ${element}`);
});

console.log(`Total: R$ ${totalSum}`);
console.log(`Dinheiro: R$ ${moneyClient}`);
console.log(`Troco: R$ ${rest}`);
