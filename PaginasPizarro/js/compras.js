if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    carrito();
}

function agregar(clicked_id) {

    alert("Agregaste el Producto: "+ clicked_id);
    console.log(document.getElementsByClassName('product-name')[clicked_id-1].innerText);
    console.log(document.getElementsByClassName('product-price')[clicked_id-1].innerText);
    var name = document.getElementsByClassName('product-name')[clicked_id-1].innerText;
    var precio =document.getElementsByClassName('product-price')[clicked_id-1].innerText;
    var total = precio;
    var datos = {
        name: name,
        precio: precio,
        total: total
    };

    localStorage.setItem(name, JSON.stringify(datos));
    carrito();
}



function carrito(){
    var data = "";
    var total =0;
    if(localStorage.length == 0){
        data += '<tr><td>No hay productos</td></tr>';
    }else{
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            console.log(key);
            var info = JSON.parse(localStorage.getItem(key));
                data +='<tr><td>'+key+'</td><td class="table-name">'+info.precio+'</td><td><button id="'+key+'" class="btn btn-secondary" onclick="eliminar(this.id)">x</button></td></tr>';
            total += parseFloat(info.total);
        }
    }
    
    document.getElementById("cartBody").innerHTML = data;
    document.getElementById("amount").innerHTML = total;

}

// function up(clicked_id){

//     var id=clicked_id;
//     var val = parseFloat(document.getElementById(id).value);

//     for (var i = 0; i <= localStorage.length - 1; i++) {
//         var key = localStorage.key(i);
//         var info = JSON.parse(localStorage.getItem(key));
//         var pr = parseFloat(info.precio);

//         if(id == pr){
//             var name = info.name;
//             var newp = parseFloat(info.precio)*val;
//             console.log(newp);

//             var datos = {
//                 name: name,
//                 precio: info.precio,
//                 total: newp
//             };

//             localStorage.setItem(name, JSON.stringify(datos));
//             carrito();
//             document.getElementById(id).value=val;     

//         }

        
//     }



// }

function nueva(){
    localStorage.clear();
    alert('Se ha limpiado el carrito')
    carrito();
    document.getElementById('cliente').value="";
    document.getElementById('correo').value="";

}

function complete(){
    alert('Compra Exitosa');
    nueva();
}

function eliminar(clicked_id){
    
    localStorage.removeItem(clicked_id);
    carrito();
}

function ver(){
    var enviar = document.getElementById('amount').innerText;
    var cliente = document.getElementById('cliente').value;
    var email = document.getElementById('correo').value;
    document.getElementById("info1").innerHTML = cliente;
    document.getElementById("info2").innerHTML = email;
    document.getElementById("enviar").innerHTML = "S/."+enviar;
}