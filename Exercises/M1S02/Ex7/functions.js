let priceBread = prompt("Digite o valor do preço do pão");

let base = [];

for (i = 1; i <= 50; i++) {
    base.push(i);   
}

let tablePrices = base.map((element) => {return (element*priceBread).toFixed(2)});
console.log(tablePrices);