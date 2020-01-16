import { combineReducers } from 'redux';

const robotPosition = (state=[], action) => {
    switch(action.type) {
        case 'PLACE_ROBOT':
            return {
                x: action.x,
                y: action.y,
                f: action.f
            }
        default: return state;
    }
}

export default combineReducers({
    robotPosition:robotPosition
});