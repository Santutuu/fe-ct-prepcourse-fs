function ordenarArray(array) {
  
  array.sort( (a, b) => {
    if (a==b){
      return 0;
    }
    if (a < b){
      return -1;
    }
    return 1;
  });

  return array;

  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
}

module.exports = ordenarArray;
