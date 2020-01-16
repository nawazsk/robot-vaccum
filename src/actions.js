export const placeRobot = (dir, x,y,f) => ({
    type: 'PLACE_ROBOT',
    dir,
    x,
    y,
    f
});

export const setRobotDirection = (dir, x, y, f) => ({
    type: 'SET_ROBOT_DIRECTION',
    dir,
    x,
    y,
    f
});

export const moveRobot = (dir, x, y, f) => ({
    type: 'MOVE_ROBOT',
    dir,
    x,
    y,
    f
});

export const robotDirections = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    DEFAULT: 'DEFAULT'
}