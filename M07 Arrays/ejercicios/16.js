function mesesDelAño(array) {

  encontrado = array.filter(function (elemento) {
    
    
    return elemento == 'Enero' || elemento == 'Marzo' || elemento == 'Noviembre';
  });

  if(encontrado.length<3){

    return 'No se encontraron los meses pedidos';
  } else {
    return encontrado;

  }
  



  
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
}

module.exports = mesesDelAño;
