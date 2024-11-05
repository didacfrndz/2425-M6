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
  
  let preguntaActual; 
  let posicionActual = 1;
  let aciertos = 0;
  let errores = 0;
  

  function moverJugador(){
    if(aciertos== true){
      aciertos++;
      posicionActual= posicionActual +1;

    }else{
      errores++
      posicionActual = posicionActual -3;
      if(posicionActual<=3){
        posicionActual=1;
      }
    }
  }
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
          aciertos++;
          posicionActual++;
          
        } else {
          resultado.className = 'alert alert-danger'; 
          resultado.innerHTML = `La respuesta es incorrecta.`; 
          errores++;
          if(posicionActual<=3){
            posicionActual=1;
          }else{
            posicionActual=posicionActual-3;
          }
          
        }
      });
      
    }
    console.log("La posicion actual es: ",posicionActual);
  console.log("Los aciertos actuales son: ",aciertos);
  console.log("Los errores actuales son: ",errores);
  }
  
  mostrarPreguntas();
  
  document.querySelector('#next-question').addEventListener('click', function() {
    mostrarPreguntas(); 
  });

  