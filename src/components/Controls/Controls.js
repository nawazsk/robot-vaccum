import React from 'react';
import './Controls.css';
const Controls = () => {
    return(
        <div className="controls">
            <div className="place-section">
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
                <button className="btn">Place</button>
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

export default Controls;