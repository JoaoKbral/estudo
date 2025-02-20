let maxNumber = 100;
let secretRandomNumber = Math.floor(Math.random() * (maxNumber + 1));
let correctSecretRandomNumber = false;
let numberSecretHistory = new Map();
let tries = 5;
let counter = 1;
alert("Boas vindas ao jogo do número secreto");
alert(`O número está entre 0 e ${maxNumber}`);
alert("Escolha o número certo para finalizar");

const winMessage = document.getElementsByClassName("invisivel")[0];

while (!correctSecretRandomNumber && counter <= tries) {
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
  counter++;
}

if (counter == tries && correctSecretRandomNumber) {
  alert("O número secreto é: " + secretRandomNumber);
}
