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


