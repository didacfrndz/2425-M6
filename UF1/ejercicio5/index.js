let contadorUsuarios = 1;
document.querySelector('#btnCrearFicha').addEventListener('click', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var dni = document.getElementById('DNI').value;
    var imagen = document.getElementById('Imagen').value;
    document.querySelector('#quienEs').innerHTML = `${nombre} ${apellido1} ${apellido2}`;
    document.querySelector('#documento').innerHTML = `DNI: ${dni}`;
    document.querySelector('#imagenUser').src = imagen;
    var nuevaFila = `<tr>
                        <td>${contadorUsuarios++}</td>
                        <td><img width="30" src="${imagen}" alt=""></td>
                        <td>${nombre}</td>
                        <td>${apellido1} ${apellido2}</td>
                        <td>${dni}</td>
                    </tr>`;
    document.querySelector('#usuarios').innerHTML += nuevaFila;
});