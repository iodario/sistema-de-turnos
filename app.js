/* 
* Sistema de clinica medica*
* Solicito a los usuarios ingrese sus datos y un turno deseado. *
* Con validacion de ingreso de datos ingresados por el usuario.
* Muestro un listado de usuarios y sus turnos por consola.
*/



class Persona {
    constructor(nombre, edad, dni, turno) {
        this.nombre = nombre.toLowerCase();
        this.edad = parseInt(edad);
        this.dni = parseInt(dni);
        this.turno = [];
    }
    mostrar_turnos() {
        return (`Turnos reservados de ${this.nombre} - ${this.dni}: \n${this.turno}`)
    }

    set_turno(nuevo_turno) {
        this.turno = turno.push(nuevo_turno);
    }
}




let bienvenido = confirm("Bienvenido a sistema de turnos. Desea comenzar?")
const personas = [];
const turno = [];

//invalidDate() elimina el ultimo dato de usuario ingresado incorrectamente.
function invalidDate() {
    personas.pop();
    bienvenido = false;
    console.log(personas);
}



function solicitar_datos_turno() {
    let flag = true;
    while (flag) {

        let msj = "";
        let turno_ingresado = prompt("Ingrese dia y horario para su turno. ");

        //validaciones de input
        if (!turno_ingresado) {
            msj += "\nDebe ingresar un turno valido";

        } else {
            alert("Turno reservado con exito");            
            flag = false;
            turno.push(turno_ingresado);  
                 
        }
    }
    
}



while (bienvenido) {
    //solicito datos al usuario
    personas.push(new Persona(
        prompt("Ingrese su nombre"),
        prompt("Ingrese su edad"),
        prompt("Ingrese su dni")

    ));

    solicitar_datos_turno()

    //valido inputs, si ALGUNO falla llamo a la funcion invalidDate()
    if (personas.some((user) => (isNaN(user.edad)))) {
        alert("Usted a ingresado una EDAD inválida. Reintente.");
        invalidDate()

    } else if (personas.some((user) => (isNaN(user.dni)))) {
        alert("Usted a ingresado un DNI inválido. Reintente.");
        invalidDate()


    } else {
        bienvenido = confirm("Desea reservar otro turno?")

    }

}

personas.forEach((user) => console.log(user));













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

/*
   } else if (personas.some((user) => (isNaN(Date.parse(user.turno))))) {
       alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
           invalidDate() */