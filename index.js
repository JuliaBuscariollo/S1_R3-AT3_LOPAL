// Solicita um número ao usuário
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é válido
if (isNaN(numero) || numero <= 0) {
  alert("Por favor, digite um número inteiro positivo válido.");
} else {
  let resultado = "";
  for (let i = 1; i <= numero; i++) {
    resultado += i + " ";
  }
  
  console.log("Números de 1 até " + numero + ":", resultado);
}