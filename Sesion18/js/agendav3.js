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
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);
    document.getElementById("email").value = localStorage.getItem(nombre);
}
function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}
function actualizarDatos(){
    var registro = "";
    if (localStorage.length === 0){
        registro += '<li>Vacío</li>'
    }else{
        for(var i=0; i <= localStorage.length - 1; i++){
            var key =localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>' 
            + '<span class="nom">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}