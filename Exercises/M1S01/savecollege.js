const students = [
    {
      name: "Jose",
      height: 1.6,
      age: 25,
      sex: "M",
      classRoom: 2,
      mathematics: 6
    },

    {
      name: "Maria",
      height: 1.65,
      age: 26,
      sex: "F",
      classRoom: 1,
      mathematics: 7.5
    },

    {
      name: "João",
      height: 1.7,
      age: 30,
      sex: "M",
      classRoom: 2,
      mathematics: 9.4
    },

    {
      name: "Antonio",
      height: 1.69,
      age: 33,
      sex: "M",
      classRoom: 2,
      mathematics: 10
    },

    {
      name: "Manoel",
      height: 1.65,
      age: 25,
      sex: "M",
      classRoom: 1,
      mathematics: 4.6
    },
  ];

console.log(students);

let totalMathematics = 0;

totalMathematics = students[0].mathematics + students[1].mathematics + students[2].mathematics + students[3].mathematics + students[4].mathematics;
console.log(`A média da turma é ${totalMathematics/5}`);

if (students[0].mathematics>5){
  console.log(`O aluno ${students[0].name} foi aprovado`)
}
else{
  console.log(`O aluno ${students[0].name} foi reprovado`)
};

if (students[1].mathematics>5){
  console.log(`O aluno ${students[1].name} foi aprovado`)
}
else{
  console.log(`O aluno ${students[1].name} foi reprovado`)
};

if (students[2].mathematics>5){
  console.log(`O aluno ${students[2].name} foi aprovado`)
}
else{
  console.log(`O aluno ${students[2].name} foi reprovado`)
};

if (students[3].mathematics>5){
  console.log(`O aluno ${students[3].name} foi aprovado`)
}
else{
  console.log(`O aluno ${students[3].name} foi reprovado`)
};

if (students[4].mathematics>5){
  console.log(`O aluno ${students[4].name} foi aprovado`)
}
else{
  console.log(`O aluno ${students[4].name} foi reprovado`)
};