function removeDuplicate() {
  const del = [];

  const vet = [
    "Pedro",
    "José",
    "Aderbal",
    "Danilo",
    "Luisa",
    "Vitoria",
    "Luis",
    "Danilo",
    "José",
  ];

  for (let i = 0; i < vet.length; i++) {
    for (let j = i + 1; j < vet.length; j++) {
      if (vet[i] === vet[j]) {
        del.push(vet[j]);
        vet.splice(j, 1);
      }
    }
  }
  console.log(`Deletados:`);
  console.log(del);
  console.log(`Lista sem duplicados:`);
  console.log(vet);
}

removeDuplicate();
