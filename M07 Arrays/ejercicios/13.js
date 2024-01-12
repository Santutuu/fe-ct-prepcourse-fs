function promedioResultadosTest(resultadosTest) {

  suma=0
  promedio=0
  for (i=0 ; i< resultadosTest.length ; i++) {
    suma=suma + resultadosTest[i];
  }
promedio=suma/i;

return promedio;
  


  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
}


module.exports = promedioResultadosTest;
