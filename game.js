var config = {
    type:Phaser.AUTO,
    scale: {
        mode:Phaser.Scale.FIT, // scala automaticamente
        autoCenter:Phaser.Scale.CENTER_BOTH, // centra automaticamente
        width:800, // ancho de pantalla
        height:600,// alto de pantalla
    },
    physics : {
        default:"arcade", // tipo de fisica que va a utilizar 
        arcade: {
            gravity: { y :0},// la gravedad del juego
            //debug: true // debug
        }
    },

    scene:[scene1]

}

var game = new Phaser.Game(config);
var player;
var objetivo;
var distancia;
var score = 0;
var scoreText; 
var win;
var lose;
var velocidad;
var winau = new Audio ("assets/win.mp3");
var loseau = new Audio ("assets/lose.mp3");
