// EJERCICIO 07
/*Crear una función sum que devuelva la suma de todos sus argumentos

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

function sum(...numeros) {
  let sum = 0;
  for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}

console.log(sum(1, 2, 3));
console.log(sum(8, 2));
console.log(sum(1, 2, 3, 4, 5));

// EJERCICIO 08
/*El siguiente código no funciona de manera correcta, intente encontrar el error

function multiply(a, b){
  a * b
}

multiply(2, 2) // => 4*/
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 2));

// EJERCICIO 09
/*Escriba la definición de la función "say" usando el siguiente formato(Debe retornar el string "Hello World"):

say("Hello")("World") // => "Hello World"*/
function say(str1, str2) {
  return str1 + " " + str2;
}

console.log(say("Hello", "World"));
getBMI(65, 1.8);