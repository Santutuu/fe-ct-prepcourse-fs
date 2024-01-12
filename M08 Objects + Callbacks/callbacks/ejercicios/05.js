function forEach(array, cb) {
  
  array.forEach(element => {

    cb(element);
    
  });

 




  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
}

function imprimir(numeros) {
  console.log(numeros);
}

module.exports = forEach;

forEach([1, 2, 3], imprimir);