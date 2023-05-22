const btn = document.querySelector("button");
const link1 = document.querySelector("#link1");

btn.onmouseover = function() {
  btn.style.background = '#1e863f';
}

btn.onmouseout = function() {
  btn.style.background = '#00A335';
}

link1.onmouseover = function() {
  link1.style.color = '#1e863f';
}

link1.onmouseout = function() {
  link1.style.color = '#00A335';
}



function processarLogin(e) {
  e.preventDefault();
  console.log("processarLogin");
  console.log(e);
}
