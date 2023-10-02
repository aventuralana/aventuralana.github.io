// Elementos del DOM
var gameText = document.getElementById("game-text");
var gameInput = document.getElementById("game-input");
var gameBtn = document.getElementById("game-btn");

// Variables del juego
var playerScore = 0;
var currentLevel = 1;

// Función para imprimir texto en el juego
function printGameText(text) {
  gameText.innerHTML += "<p>" + text + "</p>";
}

// Función para cambiar de nivel
function changeLevel(level) {
  currentLevel = level;

  // Limpiar el contenido del juego
  gameText.innerHTML = "";

  // Ir al nivel correspondiente
  switch (currentLevel) {
    case 1:
      printGameText("Su primera parada lo llevó a un antiguo jardín donde se encontró con una puerta de hierro oxidado. Sobre la puerta, un enigma estaba tallado en una placa de piedra:");
      printGameText("Derecha, izquierda, arriba, abajo… solo un camino te llevará a descubrir qué famosa canción fue recreada en stop motion.");
      printGameText("¿Cómo se llamaba dicha canción?");
      break;
    case 2:
      printGameText("La puerta se abre y ante ti se encuentra una habitación blanca con adornos rosas y un saltamontes con sombrero de copa bebiendo un margarita.");
      printGameText("Cri Cri hola gata, te estaba esperando. Para poder seguir tu camino, debes recordar, recordar tu olor corporal los primeros días en tu nuevo hogar.");
      printGameText("¿A qué olía Lana?");
      break;
    case 3:
      printGameText("Tras decir esa palabra, el saltamontes se levanta de su silla y te da una mochila.");
      printGameText("Cri Cri, ahora vas a tener que pensar muy rápido. Al decir esto, el saltamontes tira de una palanca y una trampilla se abre a tus pies.");
      printGameText("Empiezas a caer al vacío, rápidamente revisas la mochila y ves que tiene un candado con un código numérico y una frase inscrita.");
      printGameText("¿Cuántos aquenios tiene un gatofresa?");
      break;
    case 4:
      printGameText("Tras introducir la clave, el candado se abre y puedes apreciar que es un paracaídas.");
      printGameText("Rápidamente te lo colocas a la espalda y tiras de la anilla, pero para tu sorpresa, un globo con forma de cactus con bigote se empieza a inflar.");
      printGameText("La velocidad de tu caída empieza a disminuir y lentamente llegas al suelo. Miras a tu alrededor y observas que te encuentras en un bosque.");
      printGameText("Ves un camino de baldosas y decides seguirlo. Te conduce a la entrada de un castillo construido con regaliz negro.");
      printGameText("3 cuervos cuervos posados en el dintel de la puerta empiezan a graznar: tanuki, gato y búho, tanuki, gato y búho, tanuki, gato y búho.");
      printGameText("¿Qué querrán decir estos molestos pajarracos?");
      break;
    case 5:
      printGameText("Al decir esta palabra, la puerta se abre y sin pensarlo dos veces, Lana decide aventurarse dentro del castillo de gominola.");
      printGameText("Mientras explora los pasillos y las habitaciones llenas de dulces, se encuentra con una criatura increíblemente peculiar. Era un animal fantástico, con un cuerpo de dragón y alas de águila.");
      printGameText("¡Bienvenido, valiente gato! Para avanzar más allá de este castillo, debes resolver un acertijo que solo los más astutos pueden responder.");
      printGameText("Vuelo de noche, duermo de día y con el nombre de tu amigo cambiará con cortesía.");
      break;
    case 6:
      printGameText("El animal asintió: ¡Correcto! Eres un gato inteligente, Mimoso. Puedes continuar tu aventura.");
      printGameText("El animal batió sus alas y dejó ver un Huevo gigante de color morado.");
      printGameText("Te acercas al huevo y lo acaricias lentamente, de repente empieza a sonar una música dentro del huevo.");
      printGameText("Recuerda, recuerda, tininoooo, recuerda qué día es hoy, tini noniii, recuerda, recuerda.");
      break;
      case 7:
      printGameText("El huevo se abre con un estallido de confeti y purpurina");
      printGameText("SORPRESAAAA!! Gritan a la vez todos los animales fantasticos que se habian escondido en lugares estrategicos para que no les vieses");
       printGameText("Feliz No Cumpleanos!!!!");
       printGameText("Miau Miau Miau");
       const button = document.getElementById('myButton');

 printGameText("¡Felicidades, has terminado el juego!");

  // Mostrar el botón de finalizar juego
  var endBtn = document.getElementById("end-btn");
  endBtn.style.display = "block";

      break;
   }
}

// Función para manejar la entrada del jugador
function handleInput() {
  var inputValue = gameInput.value.toLowerCase();
  gameInput.value = "";

  // Manejar la entrada en función del nivel actual
  switch (currentLevel) {
    case 1:
      if (inputValue.includes("steal my girl")) {
        printGameText("Decides buscar más información sobre los juegos retro.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(2);
      } else {
        printGameText("¡Te equivocaste de dirección, gata carapapa!");
      }
      break;
    case 2:
      if (inputValue.includes("culo")) {
        printGameText("Envías un correo electrónico a 'gameover@pixelcity.com'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(3);
      } else {
        printGameText("No olía rico");
      }
      break;
    case 3:
      if (inputValue.includes("5")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(4);
      } else {
        printGameText("Los gatofresas son muy difíciles de ver y por eso la gente los suele dibujar");
      }
      break;
    case 4:
      if (inputValue.includes("totoro")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(5);
      } else {
        printGameText("gordo y peludo, un amigo medio gatuno");
      }
      break;
    case 5:
      if (inputValue.includes("muricielago")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(6);
      } else {
        printGameText("animal volador cuyo nombre cambió");
      }
      break;
    case 6:
      if (inputValue.includes("no cumpleanos")) {
        printGameText("¡Correcto! La clave es válida.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(7);
      } else {
        printGameText("Sin ñ");
      }
      break;
    case 7:
      // Lógica del último nivel (a completar si es necesario)
      break;
    default:
      break;
  }
}


// Función para imprimir texto en el juego
function printGameText(text) {
  gameText.innerHTML += "<p>" + text + "</p>";
}

// Configuración inicial del juego
var currentLevel = 1;

// Obtener elementos del DOM
var gameText = document.getElementById("game-text");
var gameInput = document.getElementById("game-input");

// Imprimir el texto del primer nivel
changeLevel(1);

// Agregar evento para manejar la entrada del jugador
gameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    handleInput();
  }
});
