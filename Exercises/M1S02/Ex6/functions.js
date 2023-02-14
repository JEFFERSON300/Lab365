let number = prompt("Digite o número que você deseja a tabuada");

const base = [1,2,3,4,5,6,7,8,9]

let newTab = base.map((element)=>{return element*number})

console.log(newTab);