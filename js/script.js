// CAPTURA DE DATOS PARA PERSONAS INTERESADAS EN PROGRAMAS EN LINEA

const USUARIOS_CORRER = [];
const USUARIOS_PESAS = [];
const USUARIOS_YOGA =[];

function nuevoUsuarioCorrer() {
    let nombre = prompt("Por favor ingresa tu nombre para inscribirte al curso 'Couch To 5K'")
    if(nombre !== "") {
        let correrAlert = alert(`Gracias ${nombre}, nos contactaremos pronto para dictarte el proceso para tu inscripción`);
        USUARIOS_CORRER.push(nombre);
    } else {
        let errorAlert = alert("Por favor vuelve a intentarlo ingresando un nombre en la casilla.");
    }
}
function nuevoUsuarioYoga() {
    let nombre = prompt("Por favor ingresa tu nombre para inscribirte al curso 'Hatha Yoga'")
    if(nombre !== "") {
        let correrAlert = alert(`Gracias ${nombre}, nos contactaremos pronto para dictarte el proceso para tu inscripción`);
        USUARIOS_YOGA.push(nombre);
    } else {
        let errorAlert = alert("Por favor vuelve a intentarlo ingresando un nombre en la casilla.");
    }
}

function nuevoUsuarioPesas() {
    let nombre = prompt("Por favor ingresa tu nombre para inscribirte al curso 'Boring But Big'")
    if(nombre !== "") {
        let correrAlert = alert(`Gracias ${nombre}, nos contactaremos pronto para dictarte el proceso para tu inscripción`);
        USUARIOS_PESAS.push(nombre);
    } else {
        let errorAlert = alert("Por favor vuelve a intentarlo ingresando un nombre en la casilla.");
    }
}



// CALCULADORA DE MAXIMO PESO EN UNA REPETICIÓN AL LEVANTAR PESAS (1RM - 1 REP MAX)

function promptUsuario() {
    let promptEjercicio = prompt("Introduzca el ejercicio a calcular");
    let promptReps = parseFloat(prompt(`Introduzca el número de repeticiones que hace ${promptEjercicio} normalmente.`));
    let promptPeso = parseFloat(prompt(`Introduzca el peso en kg con el que hace ${promptReps} repecitiones normalmente.`));
    let orm = Math.round(promptPeso / (1.0278 - 0.0278 * promptReps));
    let alertORM = alert(`Su máximo de peso para una repetición (ORM) es ${orm}kg`);
    return orm;
}
