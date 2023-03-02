function countVowels(word) {
  if (typeof word != "string") {
    console.log("Error!");
  }
  let cont = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "e" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "u"
    ) {
      cont++;
    }
  }
  if (cont == 0) {
    console.log("A palavra não tem vogais");
  } else {
    console.log(`A palavra ${word} tem ${cont} vogais`);
  }
}

countVowels("jose");
