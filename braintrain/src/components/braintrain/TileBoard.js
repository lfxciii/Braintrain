import React from 'react';
import Tile from "./Tile";

// this component displays only what it parent delegates to it.
// acts as communication layer between tile and game
export default function TileBoard(props) {
    // map tiles and pass it its details
    const tiles = props.tiles.map((t, index) => {
        return (
            <Tile
                key={index}
                tile={t}
                tileClick={props.tileClick}
            />
        );
    });

    // render tile list
    return (
        <div className="row">
            {tiles}
        </div>
    );
}