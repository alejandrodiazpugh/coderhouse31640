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
    if(!document.querySelector(".itemRow")) {
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
        document.querySelector(".total").innerHTML = "";
    })
}

function clickParaAgregar(evento) {
    evento.addEventListener("click", () => {
        const elementoAComprar = evento.parentElement;
        const imgDePrograma = elementoAComprar.querySelector(".productos__image").src;
        const nombreDePrograma = elementoAComprar.querySelector(".productos__titulo").innerText;
        const precioDePrograma = elementoAComprar.querySelector(".productos__precio").innerText;
        agregarAlCarrito(imgDePrograma,nombreDePrograma,precioDePrograma);
    });
}

let cantidadBoring = 2;
let cantidadHatha = 2;
let cantidadCouch = 2;


function agregarAlCarrito(imagen,programa,precio) {
    const newRow = document.createElement("div");
    const precioSplit = precio.split("$");
    const precioValor = parseFloat(precioSplit[1]);
    newRow.classList.add("carritoRow");
    newRow.classList.add("itemRow");
    const idRow = programa.split(" ");
    newRow.setAttribute("id",`${idRow[0]}`);
    if(!!document.querySelector(`#${idRow[0]}`)) {
        switch(idRow[0]) {
            case "Boring":
            document.querySelector(`#carritoRow__cantidad--${idRow[0]}`).innerHTML = cantidadBoring;
            actualizarTotales(cantidadBoring,precioValor);
            cantidadBoring++;
            return;
            case "Hatha":
            document.querySelector(`#carritoRow__cantidad--${idRow[0]}`).innerHTML = cantidadHatha;
            actualizarTotales(cantidadHatha,precioValor);
            cantidadHatha++;
            return;
            case "Couch":
            document.querySelector(`#carritoRow__cantidad--${idRow[0]}`).innerHTML = cantidadCouch;
            actualizarTotales(cantidadCouch,precioValor);
            cantidadCouch++;
            return;  
        };
    }
    const contentNewRow = `
        <img class="carritoRow__img" src="${imagen}" alt="">
        <span class="carritoRow__producto">${programa}</span>
        <span class="carritoRow__precio">${precio}</span>
        <span class="carritoRow__cantidad" id="carritoRow__cantidad--${idRow[0]}">1</span>
        <button id="eliminar${rows_carrito}" type="button" class="carritoRow__eliminar">Eliminar</button>`;
    newRow.innerHTML = contentNewRow;
    localStorage.setItem("contenido de carrito:", contentNewRow);
    carrito.append(newRow);
    actualizarTotales(1,precioValor);
    quitarTextoVacio();
   
    
    
    // Agregar function de borrar al boton de Eliminar
    let botonEliminar = document.querySelector(`#eliminar${rows_carrito}`);
    botonEliminar.addEventListener("click", eliminarDeCarrito);
    rows_carrito++;
    cantidadBoring = 2;
    cantidadHatha = 2;
    cantidadCouch = 2;
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

// ACTUALIZAR TOTALES

function actualizarTotales(cantidad, precio) {
    let totales = document.querySelector(".total");
    const operacion = cantidad * precio;
    let valorLocal = localStorage.setItem("costo",operacion);
    if(valorLocal != null) {
        let costoPrevio =localStorage.getItem("costo");
        operacion = operacion + costoPrevio;
    }
    totales.innerHTML = `TOTAL: $${operacion}`;

}