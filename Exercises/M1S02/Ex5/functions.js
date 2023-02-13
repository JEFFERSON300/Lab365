function myFunction() {
  let cont = 10;
  var varTime = setInterval(function () {
    if (cont >= 0) {
      console.log(cont--);
    } else {
      alert("Seu tempo acabou!!! Tente Novamente!!");
      clearInterval(varTime);
    }
  }, 1000);
}
