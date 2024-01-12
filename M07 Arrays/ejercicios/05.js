function obtenerPrimerStringLargo(array) {

  mascinco=[];

  array.forEach (function(element) { 
  
if (element.length > 4) {
  mascinco.push (element);
  
  
}


})

return(mascinco[0]);


 

  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  }

module.exports = obtenerPrimerStringLargo;
