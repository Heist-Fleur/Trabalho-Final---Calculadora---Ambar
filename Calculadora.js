let opcao1= Number(prompt("Olá estimado usuário, digite um dos numeros amostrados: \n \n 1) Sair \n 2)Calcular"));
let continuar= true

while (continuar) {
switch (opcao1) {
  case 1 :
   alert("Obrigada por usar nosso programa!");
   sair()
    break;
case 2 :
  Calcular();
 break;
default:
  alert("Tente novamente");
}

function Calcular () {
 let opcoesAritmeticas= prompt("Digite o tipo de operação que gostaria de fazer: \n \n + \n - \n * \n / \n Caso quiser sair digite: SAIR ").toLocaleUpperCase()
 switch (opcoesAritmeticas) {
   case "+" :
    let somaResultado= soma();
     alert(" O resultado é: " + somaResultado );
    break;
   case "-" :
    let subtracaoResultado= subtracao();
   alert(" O resultado é: " + subtracaoResultado );
    break;
   case "*" :
    let multiplicarResultado= multiplicar()
    alert(" O resultado é: " + multiplicarResultado );
    break;
   case "/":
    let dividirResultado= dividir()
   alert(" O resultado é: " + dividirResultado); 
   break;
   case "SAIR":
     alert("Obrigada por usar nosso programa!")
     sair()
   default:
alert("Tente novamente");
 }
}
}

function soma () {
  let num1= Number(prompt("Digite um número:"))
  let num2= Number(prompt("Digite o outro número:"))
  let resultado= num1 + num2
  return resultado;
}

function subtracao () {
  let num1= Number(prompt("Digite um número:"))
  let num2= Number(prompt("Digite o outro número:"))
  let resultado= num1 - num2
  return resultado;
}

function multiplicar () {
  let num1= Number(prompt("Digite um número:"))
  let num2= Number(prompt("Digite o outro número:"))
  let resultado= num1 * num2
  return resultado;
}

function dividir () {
  let num1= Number(prompt("Digite um número:"))
  let num2= Number(prompt("Digite o outro número:"))
  let resultado= num1 / num2
  return resultado;
}

Calcular()




