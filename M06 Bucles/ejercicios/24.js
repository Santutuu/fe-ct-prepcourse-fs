function invertirTexto(texto) {
  var arreglo = texto.split("");
  var inversion = arreglo.reverse();
  var unirArreglo = inversion.join("");
  return unirArreglo;
  
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
}

module.exports = invertirTexto;