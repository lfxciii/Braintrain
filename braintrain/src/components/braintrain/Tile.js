import React from 'react';
import "./Tile.css";

// this component builds a tile
export default function Tile(props) {

    // build tile based on property state e.g. revealed etc.. 
    let tile = null;
    if (!props.tile.isRevealed) {
        tile = (
            <div id={props.tile.id}
                className="TileInitState"
                onClick={props.tileClick}                
                >                                
            </div>
        );
    }else {
        tile = (
            <div id={props.tile.id}
                className="TileRevealState">
                <p>{props.tile.value}</p>
            </div>
        );
    }

    return (
        <div className="shadow rounded" >
            {tile}
        </div>
    );
}