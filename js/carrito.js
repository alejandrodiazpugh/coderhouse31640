// Creamos la lista de programas a vender por objetos.
let programasArray = [
    {"id": 001, nombre: "Couch to 5K", "alias": "correr", "precio": 600},
    {"id": 002, nombre: "Hatha Yoga", "alias":"yoga", "precio": 700},
    {"id": 003, nombre: "Boring But Big", "alias":"pesas", "precio": 500}
]

let programasEnJSON = JSON.stringify(programasArray);

console.log(programasEnJSON);

// FIJAR PRECIO DE CURSOS

function precioCursos(programa) {
    let precio = document.querySelector(`#precio--${programa.alias}`);
    precio.innerText = `$${programa.precio}`;
}

for(let i = 0; i < programasArray.length; i++) {
    precioCursos(programasArray[i]);
}

// AGREGAR ELEMENTOS AL CARRITO
let carrito = document.querySelector(".carrito");
let carritoVacio = document.querySelector(".vacio__texto");

function addToCart(programa) {
    let botonPrograma = document.querySelector(`#carrito--${programa.alias}`)
    botonPrograma.addEventListener("click", () => {
        let enCarrito = document.querySelector(".enCarrito");
        enCarrito.createElement = "div";
        enCarrito.innerHTML = `
        <ul class="enCarrito__producto">
            <li class="producto__nombre"> ${programa.nombre}</li>
            <li class="producto__precio"> $${programa.precio}</li>
            <li class="producto__cantidad"><input type="number" value="1"></li>
        </ul>
        `
        if(carrito.hasChildNodes()) {
            carrito.remove(carritoVacio);
        }
    })
}

for(let i = 0; i < programasArray.length; i++) {
    addToCart(programasArray[i]);
};

