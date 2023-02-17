const phoneNumber = window.prompt("Digite seu número");
const mensseger = window.prompt("Digite uma mensagem");

let correctMenssenger = mensseger.replaceAll(" ",'%20');

let linkWhatsapp = "api.whatsapp.com/send?phone="+phoneNumber+"&text="+correctMenssenger;
console.log(linkWhatsapp);
document.getElementById("paragrafo").innerHTML = "Whatsapp".link(linkWhatsapp);