function dePalabrasAFrase(palabras) {

  var string= '';

  for (let i = 0; i < palabras.length; i++) {

    if(i != palabras.length -1){

    string= string + palabras[i] + ' ';
    
    } else {
      string = string + palabras [i];
    }
  }
  return string;

  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
}

module.exports = dePalabrasAFrase;
