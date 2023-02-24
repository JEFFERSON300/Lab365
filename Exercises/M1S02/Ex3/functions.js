document.getElementById("dataForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputLogin = document.getElementById("login").value;
  const inputPassword = document.getElementById("password").value;

  if (dataUser.login == inputLogin && dataUser.password == inputPassword) {
    console.log("Logado");
  } else if (inputLogin == "" || inputPassword == "") {
    console.log("Algum dos campos está vazio");
  } else {
    console.log("Credenciais incorretas");
  }
});

let dataUser = {
  login: "Jefferson",
  password: 123456,
};
