/* 
* Sistema de clinica medica*
* Solicito a los usuarios ingrese sus datos y un turno deseado. *
* Muestro un listado de usuarios y sus turnos por consola al finalizar.
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

    solicitar_datos_turno() {

        let turno_ingresado = prompt("Ingrese dia y horario para su turno. ");
        let msj = "";

        if (!turno_ingresado) {
            msj += "\nDebe ingresar un turno valido";

        } else {
            alert("Turno reservado con exito");
            turno_agenda.push(turno_ingresado);
            this.turno.push(turno_ingresado);
        }
    }
}


let bienvenido = confirm("Bienvenido a sistema de turnos. Desea comenzar?")
const personas = [];
const turno_agenda = [];

//invalidDate() elimina el ultimo dato de usuario ingresado incorrectamente.
function invalidDate() {
    personas.pop();
    bienvenido = false;
    console.log(personas);
}


while (bienvenido) {
    personas.push(new Persona
        (prompt("Ingrese su nombre"), prompt("Ingrese su edad"), prompt("Ingrese su dni")
        ));

    personas[personas.length - 1].solicitar_datos_turno()
    // turno.push(turno_ingresado);

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


















