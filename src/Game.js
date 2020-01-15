import React from 'react';

import Grid from './components/Grid';
import Controls from './components/Controls';


const styles = {
    display:"flex",
    justifyContent: 'center'
}

const Game = () => {
    return (
        <div style={styles}>
            <Grid />
            <Controls />
        </div>
    )
}

export default Game;