// Creamos la lista de programas a vender por objetos.
let programasArray = [
    {"id": 001, nombre: "Couch to 5K", "alias": "correr", "precio": 600},
    {"id": 002, nombre: "Hatha Yoga", "alias":"yoga", "precio": 700},
    {"id": 003, nombre: "Boring But Big", "alias":"pesas", "precio": 500}
];

let rows_carrito = 0;

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}
// FIJAR PRECIO DE CURSOS

function precioCursos(programa) {
    let precio = document.querySelector(`#precio--${programa.alias}`);
    precio.innerText = `$${programa.precio}`;
}

function quitarTextoVacio() {
    const carritoVacio = document.querySelector(".carritoRow__texto--vacio"); 
    if(carritoVacio) {
        carritoVacio.parentElement.remove(carritoVacio);
     }
}

function agregarTextoVacio() {
    const row = document.createElement("div");
    row.className = "carritoRow";
    row.innerHTML = `
    <p class="carritoRow__texto--vacio">Parece que no hay nada aquí...</p>`
    carrito.append(row);
}

function eliminarDeCarrito(evento) {
    const botonClick = evento.target;
    botonClick.parentElement.remove();
    if (!carrito.getElementsByClassName("carritoRow__texto--vacio")[0]) {
        agregarTextoVacio();
    }
}

function eliminarTodo() {
    const botonEliminarTodo = document.querySelector(".carritoHeader__eliminar");
    botonEliminarTodo.addEventListener("click", () => {
        const carritoRowArray = document.querySelectorAll(".carritoRow");
        for(let i = 0; i < carritoRowArray.length; i++) {
            carritoRowArray[i].remove(carritoRowArray[i]);
        }
        if (!carrito.getElementsByClassName("carritoRow__texto--vacio")[0]) {
            agregarTextoVacio();
        }
    })
}

function clickParaAgregar(evento) {
    evento.addEventListener("click", () => {
        const elementoAComprar = evento.parentElement;
        const imgDePrograma = elementoAComprar.querySelector(".productos__image").src;
        const nombreDePrograma = elementoAComprar.querySelector(".productos__titulo").innerText;
        const precioDePrograma = elementoAComprar.querySelector(".productos__precio").innerText;
        console.log(imgDePrograma, nombreDePrograma, precioDePrograma);
    
        agregarAlCarrito(imgDePrograma,nombreDePrograma,precioDePrograma);
    });
}

function agregarAlCarrito(imagen,programa,precio) {
    const newRow = document.createElement("div");
    newRow.classList.add("carritoRow");
    newRow.classList.add("itemRow");
    const contentNewRow = `
        <img class="carritoRow__img" src="${imagen}" alt="">
        <span class="carritoRow__producto">${programa}</span>
        <span class="carritoRow__precio">${precio}</span>
        <input type="number" name="cantidad" class="carritoRow__cantidad" value="1">
        <button id="eliminar${rows_carrito}" type="button" class="carritoRow__eliminar">Eliminar</button>`;
    newRow.innerHTML = contentNewRow;
    localStorage.setItem("contenido de carrito:",  contentNewRow);
    carrito.append(newRow);
    quitarTextoVacio();
    // Agregar function de borrar al boton de Eliminar
    let botonEliminar = document.querySelector(`#eliminar${rows_carrito}`);
    botonEliminar.addEventListener("click", eliminarDeCarrito);
    rows_carrito++;
}

for(let i = 0; i < programasArray.length; i++) {
    precioCursos(programasArray[i]);
}

// QUITAR Y AGREGAR TEXTO DE VACÍO
const carrito = document.querySelector(".carrito");
    
eliminarTodo();

for(let i = 0; i < programasArray.length; i++) {
    clickParaAgregar(document.querySelector(`#carrito--${programasArray[i].alias}`));
};