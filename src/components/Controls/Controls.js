import React from 'react';
import './Controls.css';
import { connect } from 'react-redux';
import { placeRobot } from '../../actions';


const Controls = ({dispatch}) => {

    const positionRobot = (e) => {
        e.preventDefault();
        let x = document.getElementById('positionX').value;
        let y = document.getElementById('positionY').value;
        let f = document.getElementById('direction').value;
        dispatch(placeRobot(x,y,f));
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
                <button className="btn">Left</button>
                <button className="btn">Move</button>
                <button className="btn">Right</button>
            </div>
            <div className="report-section">
                <button className="btn">Report</button>
                <div>
                    <span className="input-section">
                        <label>X</label>
                        <input className="input" type="text" />
                    </span>
                    <span className="input-section">
                        <label>Y</label>
                        <input className="input" type="text" />
                    </span>
                    <span className="input-section">
                        <label>F</label>
                        <input className="input" type="text" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect()(Controls);