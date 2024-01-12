function productoEntreNúmeros(a, b) {
  var may = 0;
  var min = 0;
  var producto = 0;
  if(a>b){
    may=a;
    min=b;
  } else {
    may=b;
    min=a
  }
  producto = min;
  
  for (var i = min + 1 ; i <= may ; i++){
     producto = producto * i;
      



    }
    

    
return producto;
  
  

  
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
}
  
  

module.exports = productoEntreNúmeros;