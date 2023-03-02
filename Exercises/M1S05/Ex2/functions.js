function merge() {
  const array1 = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  const array2 = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
  array1.sort();
  array2.sort().reverse();
  const newArray = [];

  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + "-" + array2[i]);
  }
  console.log(array1);
  console.log(array2);
  console.log(newArray);
}

merge();
