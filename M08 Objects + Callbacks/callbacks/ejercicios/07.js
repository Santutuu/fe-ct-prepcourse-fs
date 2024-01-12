function filter(arrayOfStrings) {

  const nuevoArreglo = arrayOfStrings.filter ((string)  => string.startsWith('a'));

  return nuevoArreglo;


  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
}

filter(['apple', 'caca', 'avion', 'culo']);

module.exports = filter;