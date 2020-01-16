import { combineReducers } from 'redux';
import { robotDirections } from './actions';


const getPosition = (action) => {
    let x = action.x;
    let y = action.y;

    if (action.f === 'n') {
        if(y < 4) {
            y++;
        }
    } else if (action.f === 'e') {
        if(x < 4) {
            x++;
        }
    } else if(action.f === 's') {
        if(y > 0) {
            y--;
        }
    } else if(action.f === 'w') {
        if(x > 0) {
            x--;
        }
    }

    return {
        x: x,
        y: y,
        f: action.f
    }
}

const robotPosition = (state=[], action) => {
    console.log(action);
    switch(action.type) {
        case 'PLACE_ROBOT':
            return {
                x: action.x,
                y: action.y,
                f: action.f
            };
            
        case 'SET_ROBOT_DIRECTION':
            let dir;
            if(action.dir === robotDirections.LEFT) {
                if(action.f === 'n') {
                    dir = 'w';
                } else if(action.f === 'w') {
                    dir = 's';
                } else if(action.f === 's') {
                    dir = 'e';
                } else if(action.f === 'e') {
                    dir = 'n';
                }
            } else if(action.dir === robotDirections.RIGHT) {
                if(action.f === 'n') {
                    dir = 'e';
                } else if(action.f === 'e') {
                    dir = 's';
                } else if(action.f === 's') {
                    dir = 'w';
                } else if(action.f === 'w') {
                    dir = 'n';
                }
            }
            return {
                x: action.x,
                y: action.y,
                f: dir
            };
            
        case 'MOVE_ROBOT':
            let position = getPosition(action);
            return position;

        default: return state;
    }
}

// const robotDirection = (state=[], action) => {
//     console.log(action);
//     switch(action.type) {
//         case 'SET_ROBOT_DIRECTION':
//             let dir;
//             if(action.dir === robotDirections.LEFT) {
//                 if(action.f === 'n') {
//                     dir = 'w';
//                 } else if(action.f === 'w') {
//                     dir = 's';
//                 } else if(action.f === 's') {
//                     dir = 'e';
//                 } else if(action.f === 'e') {
//                     dir = 'n';
//                 }
//             } else if(action.dir === robotDirections.RIGHT) {
//                 if(action.f === 'n') {
//                     dir = 'e';
//                 } else if(action.f === 'e') {
//                     dir = 's';
//                 } else if(action.f === 's') {
//                     dir = 'w';
//                 } else if(action.f === 'w') {
//                     dir = 'n';
//                 }
//             }
//             return {
//                 x: action.x,
//                 y: action.y,
//                 f: dir
//             };
//         default : return state;    
//     }
// } 


export default combineReducers({
    robotPosition:robotPosition
    
});