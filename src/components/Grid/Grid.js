import React from 'react';
import { connect } from 'react-redux';
import './Grid.css';
import Box from '../Box';

const mapStateToProps = state => {
    return ({
        robotPosition: state.robotPosition
    })
}

const renderGrid = (robotPosition) => {
    let parent = [];

    for(let i=0;i<5;i++) {
        for(let j=0;j<5;j++) {
            let element = <Box x={i} y={j} key={i+''+j} robotPosition={robotPosition}/>
            parent.push(element);
        }
    }

    return parent;
}

const Grid = ({robotPosition}) => {
    
    
    return (
        <div className="grid-container">
            <div className="dir">
                West
            </div>
            <div className="grid-outer">
                <div className="dir-ver">
                    South
                </div>
                <div id="grid" className="grid">

                    {
                        renderGrid(robotPosition)
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

export default connect(mapStateToProps)(Grid);