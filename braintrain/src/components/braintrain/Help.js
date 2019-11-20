import React from "react";

const Help = props => {
    return (
        <div className="container rounded shadow w-100">
            <h1>Train your brain help</h1>
            <p>I simple guessing and memory game. Every tile is numbered, try to find its match!</p>
            <p>Click on a tile to reveal it, then guess its corresponding tile value. 
            Try and memorize the tiles so you can go back and match them</p>
            <p></p>
            <p>If you guess wrong, the tile will be hidden and guessing continues. Guess all the tiles to {" "}
            <em>train your brain!</em></p>
        </div>
    );
}

export default Help;