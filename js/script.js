// CAPTURA DE DATOS PARA PERSONAS INTERESADAS EN PROGRAMAS EN LINEA

const USUARIOS_PROGRAMAS = [];
const CURSOS = [];

//Cargamos los cursos actuales y dejamos espacio para más oferta de cursos a futuro.
nuevoCurso = (entrada) => CURSOS.push(entrada);
nuevoCurso("Couch to 5K");
nuevoCurso("Hatha Yoga");
nuevoCurso("Boring But Big");

//Creamos la lista de clientes por objetos.
class Cliente {
    constructor(nombre, curso) {
        this.nombre = nombre;
        this.curso = curso;
    }    
}  

//Pasamos la clase por una función que agrega objetos al array de usuarios con el botón

function agregarCliente(curso) {
    let usuario = prompt("Introduce tu nombre por favor:");
    if(usuario !== null && usuario !== "") {
       USUARIOS_PROGRAMAS.push(new Cliente(usuario,curso));
       alert(`Gracias ${usuario}, nos pondrémos en contacto contigo pronto para revisar los siguientes pasos del proceso`);
    } else {
        alert("Por favor introduce un nombre válido");
    } 
}


// CALCULADORA DE MAXIMO PESO EN UNA REPETICIÓN AL LEVANTAR PESAS (1RM - 1 REP MAX)

function calculadoraOneRepMax() {
    let promptEjercicio = prompt("Introduzca el ejercicio a calcular");
    let promptReps = parseFloat(prompt(`Introduzca el número de repeticiones que hace ${promptEjercicio} normalmente.`));
    let promptPeso = parseFloat(prompt(`Introduzca el peso en kg con el que hace ${promptReps} repecitiones normalmente.`));
    let orm = Math.round(promptPeso / (1.0278 - 0.0278 * promptReps));
    let alertORM = alert(`Su máximo de peso para una repetición (ORM) es ${orm}kg`);
    return orm;
}
