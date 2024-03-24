// EJERCICIO 10
/*Crear una función llamada order que reciba dos argumentos, el primero será un arreglo de números y el segundo un booleano que llamaremos reverse que es opcional.

Si el valor de reverse es verdadero la función debe retornar el arreglo de mayor a menor, de lo contrario lo deberá organizar de menor a mayor

order([1, 2, 3], true) //=> [3, 2, 1]
order([5, 2, 1, 3, 4]) //=> [1, 2, 3, 4, 5]*/

function order(array, reverse) {
  if (reverse) {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] < array[j]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  } else {
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

console.log(order([1, 2, 3], true));
console.log(order([5, 2, 1, 3, 4]));

// EJERCICIO 11

/*Crea una función llamada max que reciba un arreglo de números como argumento y retorne el número mayor.

Nota: No utilices el método Math.max de JavaScript.

max([1, 2, 3, 4]) // => 4
max([63, 85, 39, 24, 3]) // => 85*/

function max(arr) {
  let maxim = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxim) {
      maxim = arr[i];
    }
  }
  return maxim;
}

console.log(max([1, 2, 3, 4]));
console.log(max([63, 85, 39, 24, 3]));

// EJERCICIO 12
/*Escribir una función pattern que genere el siguiente patron hasta n numero de filas. Si el argumento es 0 o es un numero negativo entonces debe devolver un string vacío e.g ""

pattern(4)

1234
234
34
4*/

function pattern(n) {
  if (n <= 0) {
    return "";
  } else {
    let str = "";
    for (let i = 0; i < n; i++) {
      for (let k = i; k < n; k++) {
        str = str + (k+1);
      }
      str += "\n";
    }
    return str;
  }
}

console.log(pattern(4));
console.log(pattern(6));