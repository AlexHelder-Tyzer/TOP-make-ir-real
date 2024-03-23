//ejercicio 3
/* Crear una función llamada isAlive que reciba dos argumentos llamados playerName y points

isAlive debe retornar verdadero si playerName es igual a "ikk" y points es mayor a 30, o si playerName es igual a "gut" y points es mayor a 10. De lo contrario, debe retornar falso.*/

function isAlive(playerName, points) {
  if (playerName === "ikk" && points > 30) {
    return true;
  } else {
    if (playerName === "gut" && points > 10) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isAlive("ikk", 20));
console.log(isAlive("ikk", 50)); //=> true
console.log(isAlive("gut", 50)); //=> true
console.log(isAlive("ikk", 20)); //=> false
console.log(isAlive("gut", 5)); //=> false
console.log(isAlive("trek", 50)); //=> false

/*Escribir una función llamada factorial que retorne el factorial de un número, que es la multiplicación de los números (positivos) menores o iguales a ese número.

Por ejemplo, el factorial de 5 (se escribe 5!) es 120:*/

function factorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(factorial(2));

// EJERCICIO 05
/*Crear una función longitud que encuentre la longitud de una cadena (string)

longitud("") //=> 0
longitud("Hola") //=> 4
longitud("You Rock") //=> 8 (contando el espacio)*/

function longitud(cadena) {
  return cadena.length;
}

console.log(longitud(""));
console.log(longitud("Hola"));
console.log(longitud("You Rock"));

// EJERCICIO 06
/* Crear una función getBMI que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X". P.D BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona y se calcula con peso / altura^2

getBMI(65, 1.8) // => "Tu BMI es 20.061728395061728"*/

function getBMI(peso, altura) {
  console.log(`Tu BMI es ${peso / altura ** 2}`);
  return;
}

getBMI(65, 1.8);