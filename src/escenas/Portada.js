import { Boton } from "../Componentes/BotonRestart.js";
import Phaser from "phaser";
export class Portada extends Phaser.Scene{
   constructor(){
        super({key:'portada'});
        this.botonP = new Boton (this);
    } 
    preload(){
        this.load.image('port','img/portada.jpg');
        this.botonP.preload();
    }
    create(){
        this.add.image(400,300,'port').setScale(.6);
        this.botonP.create();
    }
}