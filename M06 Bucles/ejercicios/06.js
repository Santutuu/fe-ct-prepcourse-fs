function tieneTresDigitos(num) {
  if (num.toString().length === 3){
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
