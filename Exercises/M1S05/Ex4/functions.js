function split(names) {
  const arrayAll = [
    { nome: "luis", idade: 26 },
    { nome: "norma", idade: 16 },
    { nome: "daiana", idade: 26 },
    { nome: "jorge", idade: 16 },
    { nome: "kauan", idade: 16 },
    { nome: "charles", idade: 26 },
    { nome: "marco", idade: 16 },
    { nome: "bruno", idade: 16 },
  ];

  const array1 = arrayAll.filter((e) => e.idade < 18);
  const array2 = arrayAll.filter((e) => e.idade >= 18);
  console.log(array1);
  console.log(array2);
}

split();
