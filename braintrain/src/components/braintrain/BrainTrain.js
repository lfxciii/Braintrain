import React, { Component } from 'react';
import TileBoard from "./TileBoard";


// this component manages game logic and state/props of game play
// also delegates display to child functional components
export default class MineSweeper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: [],
            previousTile: null
        }
        this.tileNumber = 4;//66;
        // event handlers
        this.tileClickHandler = this.tileClickHandler.bind(this);
    }

    // generates tiles
    generateTiles() {
        // pack tiles
        let bTiles = []; 
        for (let i = 0; i < this.tileNumber; i++) {
            // two sets of values, 0 -32 and 0 -32
            if (i < ((this.tileNumber / 2) - 1)) {
                bTiles.push({
                    id: i,
                    isInit: true,
                    isRevealed: false,
                    value: i.toString()
                });
            } else {
                bTiles.push({
                    id: i,
                    isInit: true,
                    isRevealed: false,
                    value: ((i === (this.tileNumber / 2) - 1) ? ((this.tileNumber / 2) - 1) : (i - (this.tileNumber / 2))).toString()
                });
            }
        }
        // set new tiles to state
        this.setState(
            {
                tiles: bTiles,
                previousTile: null
            }
        )
    }

    tileClickHandler(e) {
        // get current tile from state
        let nTiles = [...this.state.tiles];// using spread operator
        let tile = nTiles.find((tile) => {
            return (tile.id === parseInt(e.target.id));
        })
        // is there a previous tile to match with?
        if (this.state.previousTile == null) {
            // reveal card
            tile.isRevealed = true;
            nTiles[tile.id] = tile;
            this.setState(prevState => ({
                tiles: nTiles,// using spread operator
                previousTile: { ...tile } // using spread to copy object. should i use something else?
            }))
        } else { // this means there is a previous tile
            // if current tile not match clicked tile
            if (tile.value !== this.state.previousTile.value) {
                // array item based on state tile                
                let stateTile = [...this.state.tiles].find((tile) => {
                    return (tile.id === parseInt(this.state.previousTile.id));
                })

                // hide previous tile and set previous tile to null (can only be two clicks)
                stateTile.isRevealed = false;
                nTiles[stateTile.id] = stateTile;
                this.setState(() => ({
                    tiles: nTiles,
                    previousTile: null
                }))
            } else { // current tile and previous tile match
                // update current tile to reveal
                tile.isRevealed = true;
                nTiles[tile.id] = tile;
                this.setState(() => ({
                    tiles: nTiles,
                    previousTile: null // reset previous to null
                }))

                // if all = revealed true, game over and won 
                if(this.state.tiles.every((item) => { 
                    return item.isRevealed === true;
                }))
                {
                    alert("Congradulations! Memory trained!")
                    this.generateTiles();
                }
            }
        }
    }

    // component loaded, this should only happen on F5, not otherwise
    componentDidMount() {
        this.generateTiles();        
    }

    render() {
        return (
            <div className="container rounded shadow w-100">
                <div
                    className="btn btn-success"
                    onClick={() => {
                        this.generateTiles();
                    }}
                >
                    Start to Train your brain!
                </div>
                <TileBoard
                    tiles={[...this.state.tiles]}
                    tileClick={this.tileClickHandler} />
            </div>
        );
    }
}