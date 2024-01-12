function esPotenciaDeDos(numero) {
  
  for (i=1 ; i<=1000; i++){
    
    if(Math.pow(2, i)===numero){
      return true;
    }

  
  }
  return false;

    

  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
}

module.exports = esPotenciaDeDos;

//https://docs.google.com/document/d/1-YfRngBLuFPX25j_fq4_n0NcIebmTWxsjBVz5oJhfWQ/edit?usp=drive_link
//https://docs.google.com/document/d/1S70zQXy5npdtaNEnvWvxWs0Mg703x_LhKMg6z84gHmg/edit?usp=drive_link
//https://docs.google.com/document/d/1tNjLtcs1U1aAAqHuLFNTq2oZ9BsSJ2x5jNDQl0iYUwg/edit?usp=drive_link
