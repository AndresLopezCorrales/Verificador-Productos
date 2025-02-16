var productos = [
    ["1", "Palomitas", "$ 23.00", "palomitas.png"],
    ["2", "Chocolate", "$ 18.50", "chocolate.png"],
    ["3", "Refresco Cola", "$ 15.00", "refresco_cola.png"],
    ["4", "Galletas", "$ 12.75", "galletas.jpg"],
    ["5", "Papas Fritas", "$ 20.00", "papas_fritas.png"],
    ["6", "Agua Embotellada", "$ 10.00", "agua_embotellada.jpg"],
    ["7", "Jugos Naturales", "$ 22.50", "jugos_naturales.png"],
    ["8", "Barra de Cereal", "$ 17.00", "barra_cereal.png"],
    ["9", "Helado", "$ 25.00", "helado.jpg"],
    ["10", "Maní", "$ 14.00", "mani.png"],
    ["11", "Chicle", "$ 5.00", "chicle.jpg"],
    ["12", "Nachos", "$ 30.00", "nachos.jpg"],
    ["13", "Dulces Gomita", "$ 19.50", "dulces_gomita.png"],
    ["14", "Paleta de Hielo", "$ 15.00", "paleta_hielo.png"],
    ["15", "Cacahuates", "$ 13.00", "cacahuates.png"],
    ["16", "Bebida Energética", "$ 35.00", "bebida_energetica.png"],
    ["17", "Brownie", "$ 28.00", "brownie.png"],
    ["18", "Yogur Bebible", "$ 18.00", "yogur_bebible.png"],
    ["19", "Fruta Deshidratada", "$ 26.50", "fruta_deshidratada.png"],
    ["20", "Pretzels", "$ 21.00", "pretzels.png"]
];

var productosEnEspaniol = [
    ["1", "Palomitas", "$ 23.00", "palomitas.png"],
    ["2", "Chocolate", "$ 18.50", "chocolate.png"],
    ["3", "Refresco Cola", "$ 15.00", "refresco_cola.png"],
    ["4", "Galletas", "$ 12.75", "galletas.jpg"],
    ["5", "Papas Fritas", "$ 20.00", "papas_fritas.png"],
    ["6", "Agua Embotellada", "$ 10.00", "agua_embotellada.jpg"],
    ["7", "Jugos Naturales", "$ 22.50", "jugos_naturales.png"],
    ["8", "Barra de Cereal", "$ 17.00", "barra_cereal.png"],
    ["9", "Helado", "$ 25.00", "helado.jpg"],
    ["10", "Maní", "$ 14.00", "mani.png"],
    ["11", "Chicle", "$ 5.00", "chicle.jpg"],
    ["12", "Nachos", "$ 30.00", "nachos.jpg"],
    ["13", "Dulces Gomita", "$ 19.50", "dulces_gomita.png"],
    ["14", "Paleta de Hielo", "$ 15.00", "paleta_hielo.png"],
    ["15", "Cacahuates", "$ 13.00", "cacahuates.png"],
    ["16", "Bebida Energética", "$ 35.00", "bebida_energetica.png"],
    ["17", "Brownie", "$ 28.00", "brownie.png"],
    ["18", "Yogur Bebible", "$ 18.00", "yogur_bebible.png"],
    ["19", "Fruta Deshidratada", "$ 26.50", "fruta_deshidratada.png"],
    ["20", "Pretzels", "$ 21.00", "pretzels.png"]
];

// Traducciones en inglés
var productosEnIngles = [
    ["1", "Popcorn", "$ 23.00", "palomitas.png"],
    ["2", "Chocolate", "$ 18.50", "chocolate.png"],
    ["3", "Cola Drink", "$ 15.00", "refresco_cola.png"],
    ["4", "Cookies", "$ 12.75", "galletas.jpg"],
    ["5", "Potato Chips", "$ 20.00", "papas_fritas.png"],
    ["6", "Bottled Water", "$ 10.00", "agua_embotellada.jpg"],
    ["7", "Natural Juices", "$ 22.50", "jugos_naturales.png"],
    ["8", "Cereal Bar", "$ 17.00", "barra_cereal.png"],
    ["9", "Ice Cream", "$ 25.00", "helado.jpg"],
    ["10", "Peanuts", "$ 14.00", "mani.png"],
    ["11", "Gum", "$ 5.00", "chicle.jpg"],
    ["12", "Nachos", "$ 30.00", "nachos.jpg"],
    ["13", "Gummy Candy", "$ 19.50", "dulces_gomita.png"],
    ["14", "Ice Pop", "$ 15.00", "paleta_hielo.png"],
    ["15", "Peanuts", "$ 13.00", "cacahuates.png"],
    ["16", "Energy Drink", "$ 35.00", "bebida_energetica.png"],
    ["17", "Brownie", "$ 28.00", "brownie.png"],
    ["18", "Drinkable Yogurt", "$ 18.00", "yogur_bebible.png"],
    ["19", "Dried Fruit", "$ 26.50", "fruta_deshidratada.png"],
    ["20", "Pretzels", "$ 21.00", "pretzels.png"]
];

function toggleIdioma() {
    const toggleSwitch = document.querySelector('#toggle-idioma input');

    var tituloCodigoBarras = document.getElementById("titulo-CodigoBarras");

    if (toggleSwitch.checked) {
        productos = productosEnIngles;
        tituloCodigoBarras.textContent = "Code Bar";
        localStorage.setItem('toggleState', 'checked');  // Guardar estado
    } else {
        productos = productosEnEspaniol; // Vuelve a los nombres en español
        tituloCodigoBarras.textContent = "Codigo de Barras";
        localStorage.setItem('toggleState', 'unchecked');  // Guardar estado
    }
}

function toggleDarkMode() {
    const toggleSwitch = document.querySelector('#toggle-mode input');

    if (toggleSwitch.checked) {
        document.body.classList.add("darkmode");
        localStorage.setItem('darkmode', 'activo');  // Guardar estado
    } else {
        document.body.classList.remove("darkmode");
        localStorage.setItem('darkmode', null);  // Guardar estado
    }

}

window.addEventListener('load', function () {
    const toggleSwitchIdioma = document.querySelector('#toggle-idioma input');
    const savedState = localStorage.getItem('toggleState');

    const toggleSwitchMode = document.querySelector('#toggle-mode input');
    const savedStateMode = this.localStorage.getItem("darkmode");

    var tituloCodigoBarras = document.getElementById("titulo-CodigoBarras");

    if (savedState === 'checked') {
        toggleSwitchIdioma.checked = true;
        productos = productosEnIngles;
        tituloCodigoBarras.textContent = "Code Bar";
    } else {
        toggleSwitchIdioma.checked = false;
        productos = productosEnEspaniol;
        tituloCodigoBarras.textContent = "Codigo de Barras";
    }

    if (savedStateMode === 'activo') {
        toggleSwitchMode.checked = true;
        document.body.classList.add("darkmode");
    } else {
        toggleSwitchMode.checked = false;
        document.body.classList.remove("darkmode");
    }

});


//Typear número y lo busca para ver si esta en el arreglo productos gracias a función buscar
let codigo = "";
document.addEventListener("keydown", (event) => {
    if (event.key != "Enter") {
        codigo += event.key;
    } else {
        buscar(codigo);
        codigo = "";
    }

});

function buscar(codigo) {
    var control = false;
    var salida = "";

    var tituloProducto = "Producto";
    var tituloPrecio = "Precio"; // Texto por defecto en español

    var tituloNoEncontrado = "El producto no se encuentra";

    // Verifica el estado guardado en localStorage
    var toggleState = localStorage.getItem('toggleState');
    if (toggleState === 'checked') {
        tituloProducto = "Product"; // Cambia a inglés si el toggle está activado
        tituloPrecio = "Price";
        tituloNoEncontrado = "Product Not found";
    }

    for (let i = 0; i < productos.length; i++) {
        if (productos[i][0] == codigo) {
            salida += `${tituloProducto}: ${productos[i][1]} <br>
            ${tituloPrecio}: ${productos[i][2]} <br>
            <img src="./img/${productos[i][3]}" width='25%' height='25%' >`;
            document.getElementById("respuesta").innerHTML = salida;
            control = true;
            break;
        }
    }
    if (!control) {
        document.getElementById("respuesta").innerHTML = `${tituloNoEncontrado}`;
    }
    setTimeout(function () {
        window.location.href = "index.html"
    }, 3000);
}

//Fecha y hora actualizada en cada momento
window.onload = function () {
    function actualizarFechaHora() {

        var tituloFecha = "Fecha";
        var tituloHora = "Hora"; // Texto por defecto en español
        var idiomaFecha = "es-ES";

        // Verifica el estado guardado en localStorage
        var toggleState = localStorage.getItem('toggleState');
        if (toggleState === 'checked') {
            tituloFecha = "Date";
            tituloHora = "Time";
            idiomaFecha = "en-EN";
        }


        const fecha = new Date();
        const opcionesFecha = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const opcionesHora = {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        };

        const fechaFormateada = fecha.toLocaleDateString(idiomaFecha, opcionesFecha);
        const horaFormateada = fecha.toLocaleTimeString(idiomaFecha, opcionesHora);

        document.getElementById('fecha-hora').textContent =
            `${tituloFecha} ${fechaFormateada} - ${tituloHora} ${horaFormateada}`;
    }

    actualizarFechaHora();
    setInterval(actualizarFechaHora, 1000); // Actualiza cada segundo
};


