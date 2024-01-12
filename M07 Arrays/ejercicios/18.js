function breakStatement(num) {
  arreglo = [];
  suma=num;
  
  for (var i=0 ; i <=9 ; i++){
    suma=suma+2;
    arreglo.push(suma);
    
    if(arreglo[i] == i){
      return 'Se interrumpió la ejecución';
      
      }
      
      

    }

   return arreglo;

    


  }
    
    
    





  


  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

module.exports = breakStatement;
