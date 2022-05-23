/* 
* Sistema de clinica medica*
* Solicito a los usuarios ingrese sus datos y un turno deseado. *
* Con validacion de ingreso de datos ingresados por el usuario.
* Muestro un listado de usuarios y sus turnos por consola.
*/

class Usuario {
    constructor(nombre, edad, dni, turno) {
        this.nombre = nombre.toLowerCase();
        this.edad = parseInt(edad);
        this.dni = parseInt(dni);
        this.turno = new Date(turno);
    }
}

let bienvenido = confirm("Bienvenido a sistema de turnos. Desea comenzar?")
const usuarios = [];

//invalidDate() elimina el ultimo dato de usuario ingresado incorrectamente, y finaliza el programa.
function invalidDate() {
    usuarios.pop();
    bienvenido = false;
    console.log(usuarios);
}

while (bienvenido) {
//solicito datos al usuario
    usuarios.push(new Usuario(
        prompt("Ingrese su nombre"),
        prompt("Ingrese su edad"),
        prompt("Ingrese su dni"),
        prompt("Ingrese turno deseado. \nFormato:  mes/dia/año  hora:minutos.")
    ));


//valido inputs, si ALGUNO falla llamo a la funcion invalidDate()
    if (usuarios.some((user)=> (isNaN(user.edad)))) {
        alert("Usted a ingresado una EDAD inválida. Reintente.");
        invalidDate()

    } else if (usuarios.some((user)=> (isNaN(user.dni)))) {
        alert("Usted a ingresado un DNI inválido. Reintente.");
        invalidDate()

    } else if (usuarios.some((user)=> (isNaN(Date.parse(user.turno)))) ) {
    // } else if (isNaN(Date.parse(usuarios[0].turno))) {
        alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
        invalidDate()

    } else {
        bienvenido = confirm("Turno reservado con éxito. \nDesea reservar otro turno?")
    }

}

usuarios.forEach((user) => console.log(user));













/* Otras opciones */

/* if (isNaN(usuarios[0].edad)) {
    alert("Usted a ingresado una edad inválida. Reintente.");
    invalidDate()

} else if (isNaN(usuarios[0].dni)) {
    alert("Usted a ingresado un dni inválido");
    invalidDate()

} else if (isNaN(Date.parse(usuarios[0].turno))) {
    alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
    invalidDate()

} else {
    bienvenido = confirm("Turno reservado con éxito. \nDesea reservar otro turno?")
} */



/* if (isNaN(usuarios[0].edad) || isNaN(usuarios[0].dni) || isNaN(Date.parse(usuarios[0].turno))) {
    alert("usted a ingresado un dato inválido");
    usuarios.pop()
    bienvenido = false;
    console.log(usuarios);
} else {
    bienvenido = confirm("Turno reservado con éxito. \nDesea reservar otro turno? \nCancelar para finalizar.")
}
 */

