const campoValor = document.querySelector('#valor');
const campoResultado = document.querySelector('output');

campoValor.addEventListener('input', () => {
  const valor = parseInt(campoValor.value);
  const resultado = fatoresPrimos(valor);

  campoResultado.textContent = resultado;
});
