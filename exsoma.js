var num1= 23;var num2= -12;
// console.log(num1+num2)

var soma;
var resultado;

function calcularSoma (num1, num2) {
  soma = num1+num2
  return soma
}
resultado = calcularSoma(num1, num2);   
console.log('A soma de ', num1, '+', num2, '=',resultado);

num1 = 159
num2 = 249

resultado = calcularSoma(num1, num2);
console.log('A soma é:',resultado);