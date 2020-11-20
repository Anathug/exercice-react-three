import { WebGLBindingStates } from 'three/src/renderers/webgl/WebGLBindingStates'
import * as actions from '../constants/actions'

const colors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF']

export const initialState = { oddAnimated: true, cubes: [] }

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.ADD_CUBE:
            return { cubes: [...state.cubes, { id: state.cubes.length, animated: true, color: colors[Math.floor(Math.random() * colors.length)] }] }
            break;

        case actions.SHUFFLE:
            return { cubes: state.cubes.sort(() => (0.5 - Math.random())) }
            break;

        case actions.STOP_ODD:
            return { cubes: state.cubes.map(circle => circle.id % 2 === 0 ? circle : { ...circle, animated: false }) }
            break;

        case actions.CHANGE_ODD:
            return { cubes: state.cubes.map(circle => { return { ...circle, animated: true } }) }
            break;


        case actions.SPEED:
            const cubes = [...state.cubes]
            cubes[state.cubes.length - 1].speed = 5
            return { cubes }
            break;

        default:
            return state;
    }
}