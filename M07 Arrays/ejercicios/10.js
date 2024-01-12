function encontrarIndiceMayor(array) {
  var mayor=-2343224234223523;
  var j = 0;

  for (var i=0 ;i< array.length ;i++){
    if (array[i]>mayor){
      mayor=array[i];
      j=i
    }

    

    
  } 

  return j;
    
 



  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
}

module.exports = encontrarIndiceMayor;
