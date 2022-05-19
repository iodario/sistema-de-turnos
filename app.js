/* 
* sistema de clinica medica*
* login de usuarios, reserva de turnos y cancelaciones *
 */


class Usuario {
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.dni = parseInt(dni);
        this.turno = false;
    }
    reservarTurno() {
        this.turno = true;
    }
}

class Turno extends Usuario{
    constructor(nombre,dia,horario){
        super(nombre);      
        this.dia = dia;
        this.horario = horario;
    }
}

let bienvenido = confirm ("Bienvenido a sistema de turnos. Desea comenzar?")
const usuarios = [];
const turnos = [];
let nuevoTurno = "";

while(bienvenido){
usuarios.push(new Usuario(
    prompt("ingrese su nombre"), prompt("ingrese su edad"), prompt("ingrese su dni")
));
turnos.push(new Turno(
    this.nombre, prompt("ingrese un dia de la semana"), prompt("ingrese horario mañana o tarde")
));

bienvenido = confirm ("Desea reservar otro turno? \nCancelar para finalizar.")
}
















/*
let nombre = prompt("Ingrese su nombre");
let edad = 0;
let dni = 0;



 (isNaN(edad) || isNaN(dni))
do {
    edad = Number(prompt("Ingrese su edad"));
    dni = Number(prompt("Ingrese su dni"));
    if (nombre.length > 10){
        alert = ("Se paso con la cantidad de caracteres");
        nombre = prompt ("Ingrese su nombre otra vez");
    }

let usuario = new Usuario (nombre,edad,dni);

//La semana como arreglo
let semana = new Array(5)
for (let i = 0 ; i < semana.length ; i++){
    semana [i] = new Array(3)
}

flag = false;

while (!flag){
    //Sacar turnos
    alert("por favor selecciona su accion");
    alert("1 = Sacar turno");
    alert("2 = Cancelar turno");
}



 */