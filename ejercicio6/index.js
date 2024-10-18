document.querySelector('#generarNumero').addEventListener('click', function(event) {
    event.preventDefault();
    var minimo= document.getElementById('num1').value
    var maximo= document.getElementById('num2').value
    
    function obtenerRandom(minimo,maximo){
        console.log("ENTRO A LA FUNCION")
        Math.ceil(minimo);
        Math.floor(maximo);
        return Math.floor(Math.random()* (maximo-minimo)+minimo);
        console.log("funciono");
    }
    document.querySelector('#generarNumero').obtenerRandom(minimo,maximo);
    console.log("hasta aqui bien")
});