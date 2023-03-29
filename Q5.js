// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let stringTest = "David Bowie";

console.log(invertString(stringTest));

function invertString( string ) {
    let arrayString = string.split("");
    let newArrayString = [];
    for(let i = arrayString.length -1; i >= 0; i--) {
        newArrayString.push(arrayString[i]);
    }
    return newArrayString.join('');
}