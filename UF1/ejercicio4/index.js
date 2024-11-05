document.querySelector('#crearFicha').addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('Nombre').value
    let apellido1 = document.getElementById('Ap1').value
    let apellido2 = document.getElementById('Ap2').value
    let dni = document.getElementById('DNI').value
    let imagen = document.getElementById('Imagen').value;
    document.querySelector('#quienEs').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('#documento').innerHTML = dni;
    document.querySelector('#imagenUser').src = imagen;
})





