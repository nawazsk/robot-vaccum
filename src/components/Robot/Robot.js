import React from 'react';
import robot from '../../assets/robot.png'
import './Robot.css';
const Robot = ({dir}) => {


    
    return (
        <img className={dir} src={robot} />
    )
};

export default Robot;