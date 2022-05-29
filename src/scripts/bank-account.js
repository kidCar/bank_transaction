//Obtencion de datos por parte de login
//Calculos de cuentas bancarias
//Mostrar datos en pantalla con Javascript
//Actualización de cookies con nuevos datos bancarios
//Fin de sesion y regreso a login
//Valiadar errores

function loadUserData() {
  let user = getSession();
  //pintar datos en pantalla
  document.getElementById("username") = user.name;
}

function deposit() {
  if (checkExpiration()) {
    //condiciones/ reglas
    //suma del monto del usaurio    
  }
}

function withdraw() {
  if (checkExpiration()) {
    //suma del monto del usaurio
  }
}

