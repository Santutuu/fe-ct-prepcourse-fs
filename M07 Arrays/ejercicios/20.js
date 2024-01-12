function contarParesConContinue(numeros) {

  var contador=0;

  for(var i=0 ; i<numeros.length ;i++){

    if(numeros[i] % 2 !=0){
      continue;
    }
    contador++
  }

  return contador;

  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
}

module.exports = contarParesConContinue;


