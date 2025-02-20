const max = 10;
const min = 1;
const answer = randomIntGenerator(max, min);

const textoIntervaloDeValores = document.querySelector("texto__paragrafo");
textoIntervaloDeValores.innerHTML = `Escolha um numero entre ${min} e ${max}`;

function randomIntGenerator(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function verifyGuess() {
  const guess = document.querySelector(".container__input");

  if (guess.value == answer) {
    return true;
  } else return false;
}
