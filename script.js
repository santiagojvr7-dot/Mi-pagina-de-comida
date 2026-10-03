const buscador = document.getElementById("buscador");
const comidas = document.querySelectorAll(".comida");
const botones = document.querySelectorAll(".categorias button");

let categoriaSeleccionada = "todas";

function mostrarComidas() {
    const texto = buscador.value.toLowerCase().trim();

    comidas.forEach(function(comida) {

        const nombre = comida.textContent.toLowerCase();
        const categoria = comida.dataset.categoria;

        const coincideTexto = nombre.includes(texto);

        const coincideCategoria =
            categoriaSeleccionada === "todas" ||
            categoria === categoriaSeleccionada;

        if (coincideTexto && coincideCategoria) {
            comida.style.display = "";
        } else {
            comida.style.display = "none";
        }
    });
}

buscador.addEventListener("input", function() {
    mostrarComidas();
});

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const textoBoton = boton.textContent.toLowerCase();

        if (textoBoton.includes("frutas")) {
            categoriaSeleccionada = "frutas";
        }
        else if (textoBoton.includes("verduras")) {
            categoriaSeleccionada = "verduras";
        }
        else if (textoBoton.includes("proteínas")) {
            categoriaSeleccionada = "proteinas";
        }
        else if (textoBoton.includes("bebidas")) {
            categoriaSeleccionada = "bebidas";
        }
        else if (textoBoton.includes("comida rápida")) {
            categoriaSeleccionada = "comida-rapida";
        }
        else {
            categoriaSeleccionada = "todas";
        }

        mostrarComidas();
    });
});