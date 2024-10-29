//Array de los libros disponibles
let arrayLibros = [
    {
        titulo: '1984',
        autor: 'George Orwell', 
        genero: 'Distopía',
        anyo: '1949'
    },
    {
        titulo: 'Orgullo y Prejuicio',
        autor: 'Jane Austen', 
        genero: 'Romance',
        anyo: '1813'
    },
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        genero: 'Realismo Mágico',
        anyo: '1967'
    },
    {
        titulo: 'El Gran Gatsby',
        autor: 'F. Scott Fitzgerald', 
        genero: 'Tragedia',
        anyo: '1925'
    },
    {
        titulo: 'Matar a un ruiseñor',
        autor: 'Harper Lee',
        genero: 'Ficción',
        anyo: '1960'
    }
    
];


//Selector, teniendo en cuenta que no hemos usado foreach
    for(i=0;i < arrayLibros.length ; i++){
            //console.log(i); //Controlador de la funcion
            document.getElementById(`opcionLibro${i}`).innerHTML = arrayLibros[i].titulo; //Agarra los libros de la array y los mete como opcion 
        };


//Generacion de la fecha para las reservas
    const fechaActual = new Date();  //genera la fecha actual
    const dia = String(fechaActual.getDate()).padStart(2, '0'); //Establece el dia de hoy
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); //Establece el mes actual
    const anio = fechaActual.getFullYear(); //Establece el año
    const fechaFormateada = `${dia}/${mes}/${anio}`; //Lo aplica todo en una variable


//Boton de reserva
    document.querySelector("#reserva").addEventListener('click',function(){
        let seleccion = document.getElementById("select").value //Agarra el valor de la seleccion que tenemos en el selector

        //Mostrar la seleccion hecha 
        document.querySelector("#reservasHechas").innerHTML += arrayLibros[seleccion].titulo+" por "+ arrayLibros[seleccion].autor+ " Reservado el: "+ fechaFormateada+"<br>";
    })


    
