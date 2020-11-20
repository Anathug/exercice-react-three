import * as actions from '../constants/actions'

export const add_cube = () => {

    return {
        type: actions.ADD_CUBE
    }
}

export const shuffle = () => {

    return {
        type: actions.SHUFFLE
    }
}

export const change_odd = () => {

    return {
        type: actions.CHANGE_ODD
    }
}

export const stop_odd = () => {

    return {
        type: actions.STOP_ODD
    }
}

export const speed = () => {

    return {
        type: actions.SPEED
    }
}
