import React, { useState } from 'react';
import './Controls.css';
import { connect } from 'react-redux';

import { 
    placeRobot,
    setRobotDirection,
    robotDirections,
    moveRobot
} from '../../actions';

const mapStateToProps = state => {
    return ({
        robotPosition: state.robotPosition,
    })
}

const Controls = ({dispatch, robotPosition}) => {
    const [reportX, setReportX] = useState('');
    const [reportY, setReportY] = useState('');
    const [reportF, setReportF] = useState('');
    // console.log(robotPosition);

    const positionRobot = (e) => {
        e.preventDefault();
        let x = document.getElementById('positionX').value;
        let y = document.getElementById('positionY').value;
        let f = document.getElementById('direction').value;
        dispatch(placeRobot(robotDirections.DEFAULT, x,y,f));
    }

    const rotateLeft = (e) => {
        e.preventDefault();
        console.log("rotateLeft");
        const {x, y, f} = robotPosition;
        dispatch(setRobotDirection(robotDirections.LEFT, x, y, f));
    }

    const rotateRight = (e) => {
        e.preventDefault();
        console.log("rotate right");
        const {x, y, f} = robotPosition;
        dispatch(setRobotDirection(robotDirections.RIGHT, x, y, f));
    }

    const runRobot = () => {
        console.log("move robot");
        const {x, y, f} = robotPosition;
        dispatch(moveRobot(robotDirections.DEFAULT, x, y, f));
    }

    const showReport = () => {
        console.log("show report");
        const {x, y, f} = robotPosition;
        setReportX(x);
        setReportY(y);
        setReportF(f);
    }
    return(
        <div className="controls">
            <div className="place-section">
                <form onSubmit={positionRobot}>
                    <div>
                        <span className="input-section">
                            <label>X</label>
                            <input id="positionX" className="input" type="text" />
                        </span>
                        <span className="input-section">
                            <label>Y</label>
                            <input id="positionY" className="input" type="text" />
                        </span>
                        <span className="input-section">
                            <label>F</label>
                            <input id="direction" className="input" type="text" />
                        </span>
                    </div>
                    <button className="btn" type="submit">Place</button>
                </form>
            </div>

            <div className="control-section">
                <button className="btn" onClick={rotateLeft}>Left</button>
                <button className="btn" onClick={runRobot}>Move</button>
                <button className="btn" onClick={rotateRight}>Right</button>
            </div>
            <div className="report-section">
                <button className="btn" onClick={showReport}>Report</button>
                <div>
                    <span className="input-section">
                        <span>X: {reportX}</span>
                    </span>
                    <span className="input-section">
                    <span>Y: {reportY}</span>
                    </span>
                    <span className="input-section">
                    <span>F: {reportF}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Controls);