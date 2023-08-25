function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

class scene1 extends Phaser.Scene {

    constructor () {
        super ("nivel1"); // nombre escena
    }
 
    preload ()  {
        this.load.image("negro","assets/negro.jpg");
        this.load.image("star","assets/star.png");
        this.load.spritesheet("blanco","assets/blanco.jpg", { frameWidth: 32, frameHeight: 48 });
        this.load.image("win","assets/win.png");
        this.load.image("lose","assets/lose.jpg");
    }
    create () {
        var fondo=this.add.image(400,300,"negro");
        //fondo.setScale(6);

        distancia= 0;
        objetivo= new Phaser.Math.Vector2(0,0);

        player=this.physics.add.sprite(400,300,"blanco");
        player.setCollideWorldBounds(true);
        //player.setScale(3);

        var pointer=this.input.activePointer; //  activamos la función puntero

        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFFFFF' });

        // escucha todo el tiempo cuando se haga algun click

        this.input.on("pointerdown",()=>{ 
            objetivo.x = pointer.worldX; // guardame la posición del puntero en x  en el vector x del objetivo 
            objetivo.y = pointer.worldY;  // guardame la posición del puntero en y  en el vector y del objetivo 
            this.physics.moveToObject(player,objetivo,500); // move el jugador al vector del objetivo
            score += 10;
            scoreText.setText('score: ' + score);
        });
    }

    update () {
        distancia = Phaser.Math.Distance.BetweenPoints(player,objetivo); // medime todo el tiempo la distancia entre el personaje y el objetivo
        if (distancia<20) {  /// si la distancia es menor a 20 px deten el personaje
            player.setVelocity(0);
            lose = this.add.image(400,300,"lose");
            loseau.play();
            //setTimeout(loseau.pause(),10000);
            return;
        }
        if (score>=1000)
        {
            player.setVelocity(0);
            this.physics.pause();
            win = this.add.image(400,300,"win");
            winau.play();
            //setTimeout(winau.pause(),19000);
            return;
        }
    }
}
