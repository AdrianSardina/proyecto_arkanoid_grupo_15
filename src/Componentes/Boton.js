import React from "react";
import Button from 'react-bootstrap/Button';

function Boton() {
    
        return (
            <div className= "botones">
        <Button href="/" variant="danger">Inicio</Button>
        <Button href="/piedrapapeltijeras" variant="danger"> PiedraPapelTijeras</Button>
        <Button href="/ahorcadito" variant="danger"> Ahorcadito</Button>
        <Button href="/nosotros" variant="danger">Nosotros</Button>
        <Button href="/masjuegos" variant="danger">Mas Juegos</Button>
        <Button href="/arkanoid" variant="danger">Arkanoid</Button>
        </div>
        );
   
}
export default Boton;