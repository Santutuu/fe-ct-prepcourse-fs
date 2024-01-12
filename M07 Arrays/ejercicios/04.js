function obtenerElementoAleatorio(array) {

  
  eleccion = (Math.ceil(Math.random() * array.length));

  if(array.length==1){
    return array[0];
  } else {

  
  
  return array[eleccion];
  }
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
}

module.exports = obtenerElementoAleatorio;
