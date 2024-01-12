function encontrarElementoRepetido(numeros) {

  for (var i =0 ; i < numeros.length ;i++){
    for(var j=0 ; j < numeros.length ; j++){
   

      if(numeros[i] == numeros[j] && i != j){

        return numeros[i];
       
        return;
      }
      
    }

    
  }
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
}

module.exports = encontrarElementoRepetido;