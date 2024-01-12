const buscarElemento = (array, callback) => {

  const resultado = array.find((elemento) => callback(elemento));

if (resultado) {
  return resultado;
} else {
  return "No se encontró el elemento";
}
  
  

  





  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
};

module.exports = buscarElemento;
