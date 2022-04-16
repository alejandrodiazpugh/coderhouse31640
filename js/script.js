const USUARIOS_PROGRAMAS = [];
const CURSOS = [];

//Cargamos los cursos actuales y dejamos espacio para más oferta de cursos a futuro.
nuevoCurso = (entrada) => CURSOS.push(entrada);
nuevoCurso("Couch to 5K");
nuevoCurso("Hatha Yoga");
nuevoCurso("Boring But Big");

//Creamos la lista de clientes por objetos.
class Cliente {
    constructor(nombre, apellido, correo, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.curso = curso;
    } 
}  

// TODO: FORMULARIO COMPLETO QUE AGREGUE DATOS AL ARRAY CON EL LOCAL STORAGE

// CALCULADORA DE MAXIMO PESO EN UNA REPETICIÓN AL LEVANTAR PESAS (1RM - 1 REP MAX) -- ARREGLAR

function calculadoraOneRepMax(calculadora) {
    let calculator = document.querySelector(calculadora);
    let ejercicio = document.querySelector("#notificaciones__ejercicios").value;
    let reps = parseFloat(document.querySelector("#notificaciones__repeticiones").value);
    let peso = parseFloat(document.querySelector("#notificaciones__peso").value);
    calculator.addEventListener("click", () => {
           let maxPeso = Math.round(peso / (1.0278 - 0.0278 * reps));
           let mensaje = document.createElement("p");
           mensaje.innerHTML = `<p> Tu peso máximo para ${ejercicio} es de ${maxPeso} kg.</p>`
           document.body.appendChild(mensaje);
    })
}

calculadoraOneRepMax("#ORMCalculator");


// MODALES CON MAS INFORMACIÓN

function modalOpen(openId, modalId) {
    const opener = document.querySelector(openId);
    const modal = document.querySelector(modalId);
    opener.addEventListener("click", () => {
        modal.showModal();
    })
}
function modalClose(closeId, modalId) {
    const closer = document.querySelector(closeId);
    const modal = document.querySelector(modalId);
    closer.addEventListener("click", () => {
        modal.close();
    })
}

modalOpen("#correr","#correr__modal");
modalClose("#correr__cerrar", "#correr__modal");

modalOpen("#yoga","#yoga__modal");
modalClose("#yoga__cerrar","#yoga__modal");

modalOpen("#pesas","#pesas__modal");
modalClose("#pesas__cerrar","#pesas__modal");

