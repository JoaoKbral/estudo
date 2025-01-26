alert("Boas vindas ao jogo do número secreto");
alert("O número está entre 0 e 100");
alert("Escolha o número certo para finalizar");

let secretRandomNumber = Math.floor(Math.random() * 101);
let correctSecretRandomNumber = false;
let numberSecretHistory = new Map();

const winMessage = document.getElementsByClassName("invisivel")[0];

while (!correctSecretRandomNumber) {
  let guess = Number(prompt("Escolha o número: "));

  if (guess == secretRandomNumber) {
    winMessage.classList.toggle("invisivel");
    correctSecretRandomNumber = true;
  } else {
    if (guess < secretRandomNumber) {
      numberSecretHistory.set(guess, "menor");
      alert("O número inserido é menor que o número secreto");
    } else {
      if (guess > secretRandomNumber) {
        numberSecretHistory.set(guess, "maior");
        alert("O número inserido é maior que o número secreto");
      }
    }
  }
}
