const works = ["eat", "sleep", "rest", "exercise"];

alert("1 - Buscar na Lista; 2 - Alterar item da Lista; 3 - Deletar item da Lista; 4 - Adicionar item na Lista; 0 - Para encerrar");
const option = window.prompt(" Digite a opção:");

switch (option) {
    case '1':
        const work1 = window.prompt("Digite o item que deseja buscar na lista");
        search(work1);
        break;
    case '2':
        const work2 = window.prompt("Digite o item da lista");
        change(work2);
        break;
    case '3':
        const work3 = window.prompt("Digite o item que deseja deletar");
        deleteItem(work3);
        break;
    case '4':
        const work4 = window.prompt("Digite o item que deseja adicionar");
        addItem(work4);
        break;
    default:
        console.log("Encerrando o programa");
        
}

function search(work){
    if (works.find((element)=>element === work)){
        console.log("Element found");
    }
    else{
        console.log("Element not found");
    }
}

function change(work){
    const item = window.prompt("Digite o novo item:");
    for (i = 0; i< works.length; i++) {
        if (works[i] === work) {
          works[i] = item;
        }
    }
    console.log(works);
}

function deleteItem(work){
    for (i = 0; i< works.length; i++) {
      if (works[i] === work) {
        works.splice(i, 1);
      }
    }
    console.log(works);
}

function addItem(work){
    works.push(work);
    console.log(works);
}

