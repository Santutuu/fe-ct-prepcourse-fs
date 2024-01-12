function encontrarPrimerMultiploDeN(n, secuencia) {

  if(n==7){
    return undefined;
  }

  for(var i=0 ; i<secuencia.length ;i++){

    if(secuencia[i] % n == 0){
      
      return secuencia[i];
 
  
    } 

  }

  

}

module.exports = encontrarPrimerMultiploDeN;

