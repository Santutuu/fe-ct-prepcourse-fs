

function encontrarNumeroFaltante(numeros) {

  for (var i =0 ; i < numeros.length ;i++){
    if(numeros[i]-1 != numeros[i-1] && i != 0){

      return numeros[i] -1;
      

    }
    }
    return null;


  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

}

module.exports = encontrarNumeroFaltante;