const max = 10;
const min = 1;
const secretNumber = randomIntGenerator(max, min);
const tries = 1;

showInScreen(".texto__header", "Jogo do número secreto");
showInScreen(".texto__paragrafo", `Escolha um numero entre ${min} e ${max}`);

function showInScreen(name, text) {
  const target = document.querySelector(name);
  target.innerHTML = text;
}

function randomIntGenerator(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function verifyGuess() {
  const guess = document.querySelector(".container__input");

  if (guess.value == secretNumber) {
    const tentativas = tries > 1 ? "tentativas" : "tentativa";
    const message = `Você descobriu o número secreto com ${tries} ${tentativas}!`;
    showInScreen(".texto__header", "Acertou!");
    showInScreen(".texto__paragrafo", message);
  } else {
    if (guess.value > secretNumber)
      showInScreen(
        ".texto__paragrafo",
        `O número secreto é menor do que ${guess.value}`
      );
    else
      showInScreen(
        ".texto__paragrafo",
        `O número secreto é maior do que ${guess.value}`
      );
  }

  tentativas++;
}
