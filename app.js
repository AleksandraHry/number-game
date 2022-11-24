// Próba dodania informacji o ilości prób

/*let counter = 0;

const el = document.createElement("div");

const div = document.querySelector(".proby");

el.classList.add("element");

el.innerText = ++counter;

div.appendChild(el); */

let randomNr = Math.floor(Math.random() * 100 + 1);

let shot = 0;

let hit = false;

const mistake = document.getElementById("blad");

const result = document.getElementById("result");

const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let number = document.getElementById("number").value;
  check(number);
});

function check(nr) {
  if (nr >= 1 && nr <= 100 && nr == Math.floor(nr)) {
    game(nr);
    mistake.innerHTML = " ";
    document.getElementById("number").style.border = "3px solid black";
  } else if (nr !== Math.floor(nr) && hit == false) {
    mistake.innerHTML = "Wpisz liczbę naturalną";
    document.getElementById("number").style.border = "3px solid red";
  } else {
    mistake.innerHTML = "Liczba spoza zakresu";
  }
}

function game(i) {
  shot++;
  if (i == randomNr) {
    result.innerHTML = "Udało Ci się za " + shot + " razem";
  } else if (i > randomNr) {
    result.innerHTML = shot + "." + " Za dużo";
  } else {
    result.innerHTML = shot + "." + " Za mało";
  }
}
