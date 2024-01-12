function sumarArray(arrayOfNumbers, cb) {

  var suma = arrayOfNumbers.reduce ((acumula, numero) => acumula+numero, 0);

  cb(suma);





  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
}

function imprime (nros){

  console.log(nros);
  
  
}



module.exports = sumarArray;


sumarArray([1, 2, 3], imprime);