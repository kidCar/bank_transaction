//Recopilación de datos en la pantalla de login
//Validación de datos correctos
//Redireccionamiento a pagina de banco
//Manejo de errores


function validateLogin() {
  let user = document.getElementById("userEmail");
  let password = document.getElementById("userPassword");

  if(validUser(user, password)) {
    //redireccionar a otra pagina
  } else {
    //mandar error
  }
}