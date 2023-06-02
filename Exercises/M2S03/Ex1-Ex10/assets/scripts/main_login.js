const btn = document.querySelector("button");

btn.addEventListener("click", processarLogin);

function processarLogin(e) {
  e.preventDefault();
  console.log("processarLogin");
  console.log(e);
}
