// CALCULADORA DE MAXIMO PESO EN UNA REPETICIÓN AL LEVANTAR PESAS (1RM - 1 REP MAX)
function calculadoraOneRepMax() {
    const calculator = document.querySelector("#calculadora__boton");
    const ejercicio = document.querySelector("#notificaciones__ejercicios");
    const reps = document.querySelector("#notificaciones__repeticiones");
    const peso = document.querySelector("#notificaciones__peso");
    if(calculator) {
        calculator.addEventListener("click", () => {
            const maxPeso = Math.round(peso.value / (1.0278 - 0.0278 * reps.value));
            const mensaje = document.querySelector("#calculadora__resultado");
            if(mensaje.childNodes.length === 0) {
                const parrafo = document.createTextNode('p');
                parrafo.textContent = `Tu peso máximo para ${ejercicio.value} es de ${maxPeso} kg.`;
                mensaje.appendChild(parrafo);
            } else {
                mensaje.removeChild(mensaje.lastChild);
                const parrafo = document.createTextNode('p');
                parrafo.textContent = `Tu peso máximo para ${ejercicio.value} es de ${maxPeso} kg.`;
                mensaje.appendChild(parrafo);
            }
        })
    }   
}

calculadoraOneRepMax();

// MODALES CON MAS INFORMACIÓN DE LOS CURSOS

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
