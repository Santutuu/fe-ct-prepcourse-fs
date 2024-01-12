
  function filtrarNumerosPares(array) {
    
    par=array.map ((element) => {
      if(element % 2===0){
        return element;
      }
  
      
    })
  
    par.sort( (a, b) => {
      if (a==b){
        return 0;
      }
      if (a < b){
        return -1;
      }
      return 1;
    });

   
    const j = par.length;


    for(i=0 ; i<j ; i++){
        if(par[i] % 2 !== 0) {
            par.pop();
            

        }
    }
  

  
  
   return par;
  
  }


module.exports = filtrarNumerosPares;
