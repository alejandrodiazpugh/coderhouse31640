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

// AJAX

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    console.log(res.body);
    res.json().then(users => {
        console.log(users);
        const seccionTestimonios = document.querySelector(`.testimonies`);
        for (let i = 0; i < 5; i++) {
            const user = users[i];
            const newCard = document.createElement("div");
            newCard.classList.add("card--alt");
            const contentNewCard = `
                <h4 class="card__title" lang="en">${user.name}</h4>
                <h5 class="card__title" lang="en">${user.website}</h5>
                <p class="card__text">Me sirvio mucho esta página para ${user.company.catchPhrase}</p>`;
            newCard.innerHTML = contentNewCard;
            seccionTestimonios.append(newCard);
        }
    });
})
.catch(err => console.log("error ajax", err));
