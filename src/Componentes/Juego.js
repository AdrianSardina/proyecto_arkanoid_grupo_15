import { useEffect,useState } from "react";
import Phaser from "phaser";
import React from "react";
import { Gameover } from "../escenas/GameOver";
import { Portada } from "../escenas/Portada";
import Escena from "./Escena";

export default function Juego() {


    const [listo,setListo] = useState(false);
    useEffect (() =>{    
        var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 500,
        physics: {
            default: 'arcade',
            arcade: {
             //   gravity: { y: 300 }
            }
        },

        scene:[Portada,Gameover]

 
        // scene: {
        //     preload: preload,
        //     create: create
        // }
        };

          //arranca el juego
          var game = new Phaser.Game(config);
          //Trigger cuando el juego esta completamente listo
         game.events.on("LISTO",setListo)
    
          //Para que no se duplique el lienzo
          return () =>{
          setListo(false);
          game.destroy(true);
         
        }

    },[listo]);

  
    
}