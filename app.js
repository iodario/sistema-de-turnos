/* 
* Sistema de clinica medica*
* Solicito a los usuarios ingrese sus datos y un turno deseado. *
* Muestro un listado de usuarios y sus turnos por consola al finalizar.
*/



class Persona {
    constructor(nombre, apellido, email, edad, dni, turno) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email.toLowerCase();
        this.edad = parseInt(edad);
        this.dni = parseInt(dni);
        this.turno = [];
    }
  
    solicitar_datos_turno() {

        let turno_ingresado = new Date(prompt("Ingrese dia y horario para su turno. \nFormato:  mes/dia/año  hora:minutos "));
        let msj = "";

        if (!turno_ingresado) {
            msj += "\nDebe ingresar un turno valido";
        } else if  (isNaN(Date.parse(turno_ingresado))) {

            alert("Usted a ingresado una fecha inválida. \nFormato:  mes/dia/año  hora:minutos.");
            personas.pop();            

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


while (bienvenido) {
    personas.push(new Persona
        (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese su email"), prompt("Ingrese su edad"), prompt("Ingrese su dni")
        ));

    personas[personas.length - 1].solicitar_datos_turno()
        
    //valido inputs, si ALGUNO falla llamo a la funcion invalidData()
    if (personas.some((user) => (isNaN(user.edad)))) {
        alert("Usted a ingresado una EDAD inválida. Reintente.");
        invalidData()

    } else if (personas.some((user) => (isNaN(user.dni)))) {
        alert("Usted a ingresado un DNI inválido. Reintente.");
        invalidData()

    } else {
        bienvenido = confirm("Desea reservar otro turno?")
    }
}

//invalidData() elimina el ultimo dato de usuario ingresado incorrectamente.
function invalidData() {
    personas.pop();
    bienvenido = false;
    console.log(personas);
}
  

let titulo = document.createElement("p");            
titulo.innerHTML = "<h2>Listado informativo de usuarios y turnos </h2>";           
document.body.append(titulo);    



// muestro informacion de los usuarios creando elementos en el DOM
for (const usuario of personas) {
    let div = document.createElement("div");
    div.innerHTML = `<h2>${usuario.nombre} ${usuario.apellido} - Email: ${usuario.email}</h2>
                     <p> Edad: ${usuario.edad} / Dni: ${usuario.dni} / Turno: ${usuario.turno}</p>
                     <hr>`;
    document.body.appendChild(div);
}

//mustro informacion de las fechas de los turnos en agenda
let ulTurnos = document.createElement("ul");
let inner = '';
turno_agenda.forEach((turno) => {
    inner+= `<li>${turno}</li>`;

ulTurnos.innerHTML = inner;
document.body.appendChild(ulTurnos)})




















