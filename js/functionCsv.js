var productos = [];

function cargarProductos(csv) {
    productos = [];
    fetch(csv)
        .then(response => response.text())
        .then(data => {
            // Divide el contenido del archivo por líneas
            let lineas = data.split('\n');

            // Recorre cada línea para crear el arreglo de productos
            lineas.forEach(linea => {
                if (linea.trim() !== '') { // Ignora líneas vacías
                    let partes = linea.split(',');
                    productos.push([partes[0], partes[1], partes[2], partes[3]]);
                }
                console.log(linea);
            });
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

function toggleIdioma() {
    const toggleSwitch = document.querySelector('#toggle-idioma input');

    var tituloCodigoBarras = document.getElementById("titulo-CodigoBarras");

    if (toggleSwitch.checked) {
        //productos = productosEnIngles;
        cargarProductos(`./data/productosInglesCsv.csv`);

        tituloCodigoBarras.textContent = "Code Bar";
        localStorage.setItem('toggleState', 'checked');  // Guardar estado
    } else {
        //productos = productosEnEspaniol; // Vuelve a los nombres en español
        cargarProductos(`./data/productosCsv.csv`);
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
    //cargarProductos(`./data/productosCsv.csv`);
    const toggleSwitchIdioma = document.querySelector('#toggle-idioma input');
    const savedState = localStorage.getItem('toggleState');

    const toggleSwitchMode = document.querySelector('#toggle-mode input');
    const savedStateMode = this.localStorage.getItem("darkmode");

    var tituloCodigoBarras = document.getElementById("titulo-CodigoBarras");

    if (savedState === 'checked') {
        toggleSwitchIdioma.checked = true;
        cargarProductos(`./data/productosInglesCsv.csv`);
        tituloCodigoBarras.textContent = "Code Bar";
    } else if (savedState === 'unchecked') {
        toggleSwitchIdioma.checked = false;
        cargarProductos(`./data/productosCsv.csv`);
        tituloCodigoBarras.textContent = "Codigo de Barras";
    } else {
        cargarProductos(`./data/productosCsv.csv`);  // Se ejecuta si no hay nada en el localStorage
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
    var tituloPrecio = "Precio";
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
            <img src="./img/${productos[i][3]}" width='50%' height='75%' >`;
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


