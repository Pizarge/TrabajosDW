function guardarDato() {
    //capturando variables
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;

    const datos = {
        'movil': movil,
        'email': email,
    };
    //almacenando los datos
    localStorage.setItem(nombre, JSON.stringify(datos));
    //borrando los datos
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    //actualizando la lista
    actualizarDatos();
}

function recuperarDato(){
    // Capturando el nombre
    const nombre = document.getElementById("nombre").value;
    // Parseando los datos
    let datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);
    // Incluyendo los datos en el HTML
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDato(){
    // Capturando el nombre
    const nombre = document.getElementById("nombre").value;
    // Borrando el dato
    localStorage.removeItem(nombre);
    // Actualizando la lista
    actualizarDatos();
}

function eliminarTodo(){
    // Borrando todos los datos
    localStorage.clear();
    // Actualizando la lista
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacío</li>';
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            const key = localStorage.key(i);
            // Parseando los datos 
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);

            registro += `<li> <span class="nom">${key} </span> <span class="nom"> ${datos.movil} </span> <span class="nomemail"> ${datos.email} </span></li><br>`;
        }
    }
    document.getElementById("contactos").innerHTML = registro;
}