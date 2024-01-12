function esPalindromo(string) {
  var arreglo = string.split("");
  var inversion = arreglo.reverse();
  var unirArreglo = inversion.join("");
  
  stringUnido = string.replace ( /[ ]/g , "");
  inveresionUnida = unirArreglo.replace ( /[ ]/g , "");

  stringUnido = stringUnido.toLowerCase();

  inveresionUnida = inveresionUnida.toLowerCase();
  
  
  if(stringUnido===inveresionUnida){
  return true;
   
  }
  
  return false;
    
    
  
  
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
}

module.exports = esPalindromo;
