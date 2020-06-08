var date;
var dollar = "78.04";
var euro = "84.16";
function timer() {
  date = new Date();

  document.getElementById('hh').innerHTML = date.getHours();
  document.getElementById('mm').innerHTML = date.getMinutes();
  document.getElementById('ss').innerHTML = date.getSeconds();
  document.getElementById('dd').innerHTML = date.getDate();
  document.getElementById('mn').innerHTML = date.getMonth() + 1;
  document.getElementById('ee').innerHTML = date.getFullYear();
  setTimeout("timer()", 1000);
  course();
}

function convert() {
  let doll = document.getElementById('dl');
  let eur = document.getElementById('er');
  let value = document.getElementById('buttonClick').value;
  console.log(value);
  a = value / dollar;
  b = value / euro;
  doll.innerHTML = a.toFixed(2);
  eur.innerHTML = b.toFixed(2);
}

function course() {
  let doll = document.getElementById('USD');
  let eur = document.getElementById('EUR');

  doll.innerHTML = dollar;
  eur.innerHTML = euro;
}
