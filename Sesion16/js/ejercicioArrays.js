function cargarejemplo(){
    document.getElementById("text").value="5,99,43,12,37";
}

function Reiniciar(){
    location.reload();
}

function calcular(){
    var array = document.getElementById("text").value.split(/,/);

    var mayor=-Infinity,menor=+Infinity,suma=0,media=0;

    //SUMA
    for(i=0;i<array.length;i++){
    suma=parseInt(array[i])+suma;
    }

    //MEDIA
    media=suma/array.length;

    //MENOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])<menor) menor=array[i];
    }

    //MAYOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])>mayor) mayor=array[i];
    }

    //RESULTADO
    document.getElementById("resultado").innerHTML= "La suma es: "+suma+"<br>"+
                                                    "La media es: "+media+"<br>"+
                                                    "El mayor es: "+mayor+"<br>"+
                                                    "El menor es: "+menor+"<br>"

}