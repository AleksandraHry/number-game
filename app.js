let liczba = Math.floor(Math.random() * 100 + 1);

let proba = 0;

const result = document.getElementById("result");

const btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let number = document.getElementById("number").value;
  check(number);
});

function check(nr) {
  if (nr >= 1 && nr <= 100) {
    game(nr);
  } else {
    result.innerHTML = "Liczba spoza zakresu";
  }
}

function game(i) {
  proba++;
  if (i == liczba) {
    result.innerHTML = "Udało Ci się za " + proba + " razem";
  } else if (i > liczba) {
    result.innerHTML = proba + "." + " Za dużo";
  } else {
    result.innerHTML = proba + "." + " Za mało";
  }
}
