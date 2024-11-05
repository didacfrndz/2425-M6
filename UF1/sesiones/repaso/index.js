
console.log(document.querySelector('#c1').innerHTML);
console.log(document.querySelector('#c3').innerHTML);
console.log(document.querySelectorAll("div"));
const arraydiv = document.querySelectorAll(".cuadrado");
console.log(arraydiv[1].innerHTML);
for(i=0;i<3;i++){
    console.log(arraydiv[i].innerHTML);
};
arraydiv[1].classList.add("alerta");
arraydiv[1].classList.remove("cuadrado");