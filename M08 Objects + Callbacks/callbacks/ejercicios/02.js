function cambiarCadena(string, callback) {


  callback(string);


  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
}

var cambiar = function(palabra) {

  console.log (palabra + '!');

}

cambiarCadena('culo', cambiar);

module.exports = cambiarCadena;
