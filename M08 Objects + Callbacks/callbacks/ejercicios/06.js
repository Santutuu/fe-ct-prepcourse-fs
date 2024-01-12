function map(array, cb) {
  

 const nuevoArreglo = array.map ((x) => cb(x));

 return nuevoArreglo;



}
const nuevoarreglo= [];

function nuevoarregl (nros){
  return nros;

  
}







  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:


map([1, 2, 3], nuevoarregl);


module.exports = map;
