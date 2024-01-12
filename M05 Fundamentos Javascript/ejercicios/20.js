function esVocal(letra) {
  if(letra.toLowerCase() === "a" | letra.toLowerCase() === "e" | letra.toLowerCase()==="i" | letra.toLowerCase()==="o" | letra.toLowerCase()=== "u" ){
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
}

module.exports = esVocal;
