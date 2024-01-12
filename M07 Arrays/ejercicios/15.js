function todosIguales(array) {
  var copia=0;
  copia=array[0];
  for(var i=0 ; i<array.length ;i++){
    if (copia===array[i]){
      continue;
      } else {
        return false;
        
        
      }


    }
    
   
   
    

  
  return true;
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
}


   





module.exports = todosIguales;
