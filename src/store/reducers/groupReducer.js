import { SET_GROUP_ACTION } from "../actions/groupAction"

export const GROUP_ACTION = {
    remove: 'remove',
    confirm: 'confirm'
}

const initialState = {
    groupAction: GROUP_ACTION.remove,
}

function groupReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GROUP_ACTION:
            return {...state, groupAction: action.action}

        default:
            return state
    }
}

export default groupReducer
