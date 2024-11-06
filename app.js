let frases = [
    '"Va a suceder, porque voy a hacer que suceda"',
    '"La paz mental llega cuando entinedes que los que: Lo que está fuera de tu control también debe de estar fuera de tu cabeza"',
    '"Las buenas decisiones vienen de la experiencia. Pero la experiencia viene de las malas decisiones"',
    '"No te estás quedando solo, estás subiendo a un nivel donde la mayría no puede saguirte"',
    '"Supe que era diferente cuando las personas que tenían más que yo empezaron a mostrar celos"',
    '"Para ser felices se necesita eliminar dos cosas: el temor de un mal futuro y el recuerdo de un mal pasado"',
    '"Nada es personal, la gente actúa desde sus heridas, sus experiencias, sus traumas, sus creencias y sus carencias"',
    '"Siempre tienes que poner el esfuerzo y el sacrificio por adelantado para luego poder ver los resultados"',
    '"Pronto mirarás hacia atrás y entenderás porque esa tormenta fue necesaria"',
    '"Aléjate de cualquier situcaicon dónde veas repetición de tu pasado"'
];

function generarFrase(){
    let frase = document.getElementById("frase");
    let iAleatorio = Math.floor(Math.random() * frases.length);

    let fraseSeleccionada = frases[iAleatorio];
    frase.textContent = fraseSeleccionada;
}