import React from 'react';
import './Box.css'
import Robot from '../Robot';
const Box = ({x, y, robotPosition}) => {
    
    return (
        <div className='box' x={x} y={y}>
        {
            robotPosition && (parseInt(robotPosition.x) === x && parseInt(robotPosition.y) === y) ?(
                <Robot dir={robotPosition.f} />
            ): ''
        }
            
        </div>
    )
}

export default Box;