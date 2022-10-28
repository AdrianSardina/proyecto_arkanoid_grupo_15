import { RestartButton } from "./RestartButton";
export class Congratulations extends Phaser.Scene {

 constructor() {

   super({ key: 'congratulations' });
 this.restartButton = new RestartButton(this);
 }

 preload() {
   this.load.image("background", './img/background.png');
 this.restartButton.preload();
 }
 
 create() {
    this.add.image(400,250,'background');
 this.scoreText = this.add.text(299, 188, 'Ganaste', { fontSize: '32px', fill: '#000' });
 this.restartButton.create();
 this.congratsImage = this.add.image(400, 90, 'congratulations');
 }
}