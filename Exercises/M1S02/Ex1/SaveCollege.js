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
  
students.forEach(element => {
  totalMathematics += element.mathematics;
  if (element.mathematics>5){
    console.log(`O aluno ${element.name} foi aprovado`)
  }
  else{
    console.log(`O aluno ${element.name} foi reprovado`)
  }
  
});

console.log(`A média da turma é ${totalMathematics/5}`);

