const btn = document.querySelector("button");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const input = document.querySelector("input");

/*
input.onclick = function() {
  input.style.borderColor = 'red';
  input.style.borderWidth = '2px';
};

input.onmouseout = function() {
  input.style.borderColor = 'blue';
  input.style.borderWidth = '1px';
  input.style.borderStyle = 'solid';
};
*/

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

link2.onmouseover = function() {
  link2.style.color = '#1e863f';
}

link2.onmouseout = function() {
  link2.style.color = '#00A335';
}


function processarLogin(e) {
  e.preventDefault();
  console.log("processarLogin");
  console.log(e);
}
