function esFechaValida(fecha) {
  var date1 = new Date(fecha);
  if (date1.toDateString() === 'Invalid Date'){
    return false
  } else {
    return true
  }



  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
}

module.exports = esFechaValida;