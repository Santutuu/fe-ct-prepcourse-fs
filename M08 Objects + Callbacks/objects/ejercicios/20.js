function sumarLikesDeUsuario(objetoUsuario) {

  var suma = 0;


  objetoUsuario.posts.forEach(post => {
    suma+= post.likes;

    
  });

 return suma;


  


  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
}

module.exports = sumarLikesDeUsuario;






//objeto usuario es un objeto que contiene propiedad posts, que es un arreglo que contiene objetos posts.