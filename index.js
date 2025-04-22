// Inicializa a variável que armazenará a soma dos números digitados
let soma = 0;

let numero;
// Loop principal: repete 10 vezes para coletar os 10 números do usuário
for (let i = 1; i <= 10; i++) {

    // Solicita ao usuário que digite número
    numero = parseInt(progmpt(`Digite o ${i}º número inteiro:`));

    // Verifica se o valor digitado é um número válido
    if (isNaN(numero)) {
        // Caso contrário, avisa o usuário e repete a solicitação
        alert("Entrada inválida. Por favor, digite um número inteiro.");
        i--;
    } else {
        // Adiciona o número validado à soma total
        soma += numero;
    }
}

// Exibe o resultado final da soma dos 10 números digitados
alert(`A soma dos 10 números digitados é: ${soma}`);