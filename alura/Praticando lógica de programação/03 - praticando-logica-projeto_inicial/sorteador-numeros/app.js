function sortear() {
  let quantidade = parseInt(document.querySelector("#quantidade").value);
  let de = parseInt(document.querySelector("#de").value);
  let ate = parseInt(document.querySelector("#ate").value);
  let resultado = document.querySelector("#result");
  let arr = [];
  let numeroSorteado = 0;

  alterarEstadoBtnReiniciar(0);

  if (quantidade < 0) {
    window.alert("A quantidade deve ser maior que zero");
    return;
  }
  if (ate < 2 && de < 1) {
    window.alert("O intervalo de valores deve ser maior que zero e positivo");
    return;
  }
  if (quantidade > ate - de + 1) {
    window.alert("O intervalo de valores deve ser maior ou igual a quantidade");
    return;
  }

  while (arr.length < quantidade) {
    numeroSorteado = gerarNumeroAleatorio(de, ate)
    if (!arr.includes(numeroSorteado)) arr.push(numeroSorteado);
  }

  resultado.textContent = arr;
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarEstadoBtnReiniciar(flag) {
  let reiniciar = document.getElementById("btn-reiniciar");

  if (flag == 0) {
    reiniciar.classList.add("container__botao");
    reiniciar.classList.remove("container__botao-desabilitado");
  } else {
    reiniciar.classList.remove("container__botao");
    reiniciar.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  document.querySelector("#quantidade").value = "";
  document.querySelector("#de").value = "";
  document.querySelector("#ate").value = "";
  document.querySelector("#result").textContent = "nenhum até agora";

  alterarEstadoBtnReiniciar(1);
}
