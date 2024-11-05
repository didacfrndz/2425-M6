let quiz = [
    {
      pregunta: "Como me llamo?", 
      respuestas: ["DeiV", "Yehor", "Didac", "Dani"],
      correcta: 2
    },
    {
      pregunta: "Que edad tengo??", 
      respuestas: [21, 22, 23,"No se jaja"],
      correcta: 1
    },
    {
      pregunta: "Cual es mi equipo actual?", 
      respuestas: ["Ade Fuster", "CEMB", "CB Gramenet", "CB Santa Coloma"],
      correcta: 0
    }, 
    {
      pregunta: "Que dorsal Uso?", 
      respuestas: [99, 9, 8, 1],
      correcta: 0
    },
    {
      pregunta: "Mi posicion es?", 
      respuestas: ["Alero", "Ala-Pivot", "Pivot", "Ni el entrenador lo sabe"],
      correcta: 2
    }
  ];
let posicioActual = 1;
let encerts = 0; 
let errors = 0; 
console.log('Posición inicial:', posicioActual);
console.log('Encerts:', encerts);
console.log('Errors:', errors);
let preguntaActual; 
function mostrarPreguntas() {
  const preAleatorio = Math.floor(Math.random() * quiz.length);
  preguntaActual = quiz[preAleatorio]; 
  document.querySelector('#question').innerHTML = preguntaActual.pregunta;
  const divPreguntas = document.querySelector('#answers'); 
  divPreguntas.innerHTML = ''; 
  let botonRespuestas = '';
  for (let i = 0; i < preguntaActual.respuestas.length; i++) { 
    botonRespuestas += 
    `
    <button class="btn btn-primary" id="answer${i+1}">${preguntaActual.respuestas[i]}</button>
    `;
  }
  document.querySelector('#answers').innerHTML = botonRespuestas; 
  const opcionEscogida = document.querySelectorAll('#answers button'); 
  const numRespuestaCorrecta = preguntaActual.correcta; 
  const resultado = document.querySelector('#result');
  resultado.style.display = "none"; 
for (let i = 0; i < opcionEscogida.length; i++) {
    opcionEscogida[i].addEventListener('click', function() { 
      resultado.style.display = "block";      
      if (opcionEscogida[i].innerHTML == preguntaActual.respuestas[numRespuestaCorrecta]) {
        resultado.className = 'alert alert-success';  
        resultado.innerHTML = `La respuesta es Correcta!!`;
        moverJugador(true); 
      } else {
        resultado.className = 'alert alert-danger'; 
        resultado.innerHTML = `La respuesta es incorrecta.`;
        moverJugador(false); 
      }
    });
  }
}
function moverJugador(endavant) {
  if (endavant == true) {     
      casillas[posicioActual].classList.add('div-point');     
      if (posicioActual > 0) {
          casillas[posicioActual - 1].classList.add('div-gris');
          casillas[posicioActual - 1].classList.remove('div-point');
      }
      posicioActual += 1;  
      encerts += 1; 
      console.log(`Respuesta correcta! Nueva posición: ${posicioActual}`); 
  } else {    
      for (let i = 0; i < casillas.length; i++) { 
          casillas[i].classList.remove('div-gris');
      }
      casillas[posicioActual - 1].classList.remove('div-point');
      posicioActual -= 3;
      if (posicioActual < 1) {
          posicioActual = 1;
      }
      errors += 1;  // Actualizar los errores
      console.log(`Respuesta incorrecta! Nueva posición: ${posicioActual}`);
      casillas[posicioActual - 1].classList.add('div-point');
  }
comprovaFinalJoc();
}
function comprovaFinalJoc(){
    if (posicioActual == 20){ 
    console.log(`Has llegado a la casilla 20, Felicidades!!!, aciertos: ${encerts}, erorres: ${errors}`);
    document.querySelector("#next-question").style.display = "none";
}
}
mostrarPreguntas();
document.querySelector('#next-question').addEventListener('click', function() {
mostrarPreguntas(); 
});