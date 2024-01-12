function esAnagrama(str1, str2) {
  var arreglo1 = str1.toLowerCase().split("");
  var arreglo2= str2.toLowerCase().split ("");
  var contador = 0;
  
  if(str1.length != str2.length){
    return false;
 
  }

  for (var i = 0 ; i <= str1.length -1 ; i++){
    for (var j = 0 ; j <= str1.length -1 ; j++){

      if(arreglo1[i] == arreglo2[j]){
       
        contador++;
        
        break;
        
      }

    }
  }
 

  if(contador == str1.length){
    return true;
    
  
  }

    return false;
  
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
}

module.exports = esAnagrama;


//function productoEntreNúmeros(a, b) {
//  var may = 0;
//  var min = 0;
//  var acumulador = 0;
//  var producto = 0;
//  if(a>b){
//    may=a;
//    min=b;
//  } else {
//    may=b;
//    min=a
//  }
  
//for (var j = min; j <= may ; j++){
//    for (var i = j ; i <= may ; i++){
//      producto = j * i;
//      acumulador = acumulador + producto;



//    }
    

//    }
//    return acumulador;
  
  

  
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código: