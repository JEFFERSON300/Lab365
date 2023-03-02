function add(names) {
  if (typeof names == "string") {
    names = Array(names);
  }

  let capitalized = [];

  // converte primeira letra para maiusculo
  for (let i = 0; i < names.length; i++) {
    temp = names[i].replace(/^[a-z]/, function (x) {
      return x.toUpperCase();
    });
    capitalized.push(temp);
  }

  const array1 = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

  for (let i = 0; i < capitalized.length; i++) {
    if (array1.some((e) => e == capitalized[i])) {
      console.log(`Erro! O nome ${capitalized[i]} já existe na lista`);
    } else if (typeof capitalized[i] == String) {
      console.log("Erro! O valor enviando não é uma string");
    } else {
      array1.push(capitalized[i]);
      console.log(array1);
    }
  }
}

add(["maria", "Jose"]);
