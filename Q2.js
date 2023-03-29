// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

console.log(checkFibonacci(22));
console.log(checkFibonacci(144));
console.log(checkFibonacci(1597));

function checkFibonacci(input) {
    let num1 = 0
    let num2 = 1
    let saveNumber = 0
    let arrayFibonacci = [];

    while (num2 <= input) {
        if (num1 == 0) {
            arrayFibonacci.push(num1)
        }
        saveNumber = num2;
        num2 = num1 + num2;
        num1 = saveNumber;
        arrayFibonacci.push(num2)
    }

    if (arrayFibonacci.includes(input)) 
        return input + " - Pertence a sequência Fibonacci";
    else 
        return input + " - Não pertence a sequência Fibonacci";

}

