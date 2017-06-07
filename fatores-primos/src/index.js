const campoValor = document.querySelector('#valor');
const campoResultado = document.querySelector('output');
const botaoCalcular = document.querySelector('button');

const listener = () => {
  const valor = parseInt(campoValor.value);
  const resultado = fatoresPrimos(valor);

  campoResultado.textContent = resultado;
};

campoValor.addEventListener('input', listener);
botaoCalcular.addEventListener('click', listener);
