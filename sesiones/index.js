const boton1 = document.querySelector("#btn1");
console.log(boton1);
const titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.innerHTML);

//cambiamos el anterior h1 con otro nuevo codigo desde js
titulo.innerHTML += "<em> Otro titulo </em>";

//escuchamos evento; clic del boton1
boton1.addEventListener("click", fnbtn1);
function fnbtn1(){
    console.log("Clic en boton 1");
}
//Lo mismo para el boton 2 pero de forma resumida
document.querySelector("#btn2").addEventListener("mouseover",function(){
    console.log("poner raton en boton 2");

})
const operacion = "2+3";
console.log("operacion: ", operacion, window.eval(operacion));