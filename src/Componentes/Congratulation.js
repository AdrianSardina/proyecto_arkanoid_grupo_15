import { RestartButton } from "../componentes/RestartButton";
export class Congratulations extends Phaser.Scene {

 constructor() {
 super({ key: 'congratulations' });
 this.restartButton = new RestartButton(this);
 }

 preload() {
 //this.load.image('congratulations', 'images/congratulations.png');
 this.restartButton.preload();
 }
 
 create() {
    this.add.image(400,300,'fondo');
 this.scoreText = this.add.text(16, 16, 'Ganaste', { fontSize: '32px', fill: '#000' });
 this.restartButton.create();
 this.congratsImage = this.add.image(400, 90, 'congratulations');
 }
}