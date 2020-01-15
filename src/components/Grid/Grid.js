import React from 'react';
import './Grid.css';
import Box from '../Box';

const renderGrid = () => {
    let parent = [];

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            let element = <Box x={i} y={j} key={i+''+j}/>
            parent.push(element);
        }
    }

    return parent;
}

const Grid = () => {
    return (
        <div className="grid-container">
            <div className="dir">
                West
            </div>
            <div className="grid-outer">
                <div className="dir-ver">
                    South
                </div>
                <div className="grid">

                    {
                        renderGrid()
                    }

                </div>
                <div className="dir-ver">
                    North
                </div>
            </div>
            
            <div className="dir">
                East
            </div>
        </div>
        
    )
}

export default Grid;