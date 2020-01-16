import React from 'react';
import './App.css';
import Game from './Game';
function App() {
  return (
    <div className="App">
      <Game />
      <div className="instructions">
        <h1>Instructions</h1>
        <ul>
          <li>
            Enter X(0-4), Y(0-4) and F(n,e,w,s) and click on Place button. You will see robot image
            in a box given as per the X,Y,F values.
          </li>
          <li>
            Press 'Left' button to change the direction of image towards left direction and 'Right'
            button towards right direction.
          </li>
          <li>
            When You press 'Move' button, robot will move one step forward in facing direction.
          </li>
          <li>
            Press 'Report' button to get the current position of robot
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
