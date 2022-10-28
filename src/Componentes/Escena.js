import Phaser from "phaser";
class Escena extends Phaser.Scene {
    platform = null;
    preload() {
        this.load.image("background", './img/background.png');
        this.load.image('platform', './img/platform.png');
        this.load.image("gameover", "img/gameover.png");
        this.load.image('ball', 'img/ball.png');


    }

    create() {
        this.add.image(400, 250, "background");
        this.gameoverImage = this.add.image(400, 90, "gameover");
        this.gameoverImage.visible = false;

        this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();;
        this.platform.body.allowGravity = false;
        this.cursors = this.input.keyboard.createCursorKeys();
        this.platform.setCollideWorldBounds(true);


        //this.ball = this.physics.add.image(400, 30, 'ball');
        this.ball = this.physics.add.image(400, 440, 'ball');
        this.ball.setData('glue', true);

        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        //this.ball.setVelocity(100, 10)

      

        this.physics.world.setBoundsCollision(true, true, true, false);
        // this.physics.add.collider(this.ball, this.platform);
        this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);


    }
    update() {
        if (this.cursors.left.isDown) {
          this.platform.setVelocityX(-500);
          if(this.ball.getData('glue')) {
            this.ball.setVelocityX(-500);
          }
        }
        else if (this.cursors.right.isDown) {
          this.platform.setVelocityX(500);
          if (this.ball.getData('glue')) {
            this.ball.setVelocityX(500);
          }
        }
        else {
          this.platform.setVelocityX(0);
          if (this.ball.getData('glue')) {
            this.ball.setVelocityX(0);
          }
        }
        if (this.ball.y > 500) {
          console.log('fin');
          this.gameoverImage.visible = true;
          this.scene.pause();
        }
        if (this.cursors.space.isDown) {
          if (this.ball.getData('glue')) {

            this.ball.setVelocity(-75, -300);
            this.ball.setData('glue', false);
          }
        }
      }
    

    platformImpact(ball, platform) {
        let relativeImpact = ball.x - platform.x;

        if (relativeImpact > 0) {
            console.log('derecha!');
            ball.setVelocityX(10 * relativeImpact);
        } else if (relativeImpact < 0) {
            console.log('izquierda!');
            ball.setVelocityX(10 * relativeImpact);
        } else {
            console.log('centro!!');
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        }
    }


}



export default Escena;