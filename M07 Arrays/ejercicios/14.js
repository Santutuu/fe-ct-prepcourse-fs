function multiplicarArgumentos() {

 

  let multiplicacion = 1;
   
  for (i=0 ;i<arguments.length ;i++){
    
    multiplicacion=multiplicacion*arguments[i];
  
  }

  if(arguments.length==0){
    return 0;
  } else {
  
  return multiplicacion;
  
  }
    
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
     // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
     // [PISTA]: "arguments" es un arreglo.
     // Tu código:
   
  }


  module.exports = multiplicarArgumentos;
