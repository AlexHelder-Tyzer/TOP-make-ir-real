// EJERCICIO 13

/*Crear una función transformToString que convierta un numero a cadena de texto

transformToString(123) // => "123"
transformToString(999) // => "999"*/

function transformToString(num) {
  return num.toString();
}

console.log(transformToString(123));
console.log(transformToString(999));

// EJERCICIO 14
/*Escribe una funcion llamada palindrome que recibe una cadena de texto. Determina si la cadena es palindrome considerando sólo caracteres alphanuméricos e ignorando si es mayúscula o minúscula.

palindrome("Atar a la rata") // => true
palindrome("vamos makers!") // => false*/

function palindrome(str) {
  let pal = true;
  let pal_array = str.replace(/ /g, "").split("");
  let down = pal_array.length - 1;
  for (let i = 0; i < Math.trunc(pal_array.length / 2); i++) {
    if (pal_array[i].toLowerCase() != pal_array[down].toLowerCase()) {
      pal = false;
    } else {
      down--;
    }
  }
  return pal;
}

console.log(palindrome("Atar a la rata"));
console.log(palindrome("vamos makers!"));

// EJERCICIO 15
/*Para este ejercicio vas a crear un método llamado flatten el cual va a recibir cualquier tipo de argumento (string, numero, array) y debe devolver todos los parámetros en un arreglo simple Nota: Cualquier matriz anidada sin importar su profundidad debe ser simplificada para poder devolver un arreglo simple

flatten(1, [2, 3], 4, 5, [6, [7]]) // => [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // = > // returns ['a', 'b', 2, 3, null, 4, 'c']*/

function flatten(...arg) {
  for(let i = 0; i < arg.length; i++){
    if(Array.isArray(arg[i])){
      arg = arg.concat(arg[i]);
      arg.splice(i, 1);
      i--;
    }
  }
  return arg;
}

console.log(flatten([1, 2, 3], "juan", [[2,3,56], "Pwpw"]));
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));