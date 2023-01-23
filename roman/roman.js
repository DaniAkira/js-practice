import input from "readline-sync";

console.log("Conversor de números arábicos em romanos: ");

let numString = input.question("Digite um Numero: ");

let numb = Number(numString);

let roman = "";

if (numString != 0) {
  function convert(num) {
    let romanAndNumber = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    for (var i in romanAndNumber) {
      while (num >= romanAndNumber[i]) {
        roman += i;
        num -= romanAndNumber[i];
      }
    }
    console.log(numb + " em algarismos romanos é: " + roman);
  }
  convert(numb);
} else {
  console.log("Não existe uma representação para o número 0");
}
