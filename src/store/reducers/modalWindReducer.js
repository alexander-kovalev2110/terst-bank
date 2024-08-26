import * as actions from "../actions/modalWindAction"

const initialState = {
    columnOpen: false,
    confirmOpen: false,
}

export default function modalWindReducer(state = initialState, action) {
    switch (action.type) {
        case actions.OPEN_COLOMN:
            return { ...state, columnOpen: true }

        case actions.CLOSE_COLOMN:
            return { ...state, columnOpen: false }

        case actions.OPEN_CONFIRM:
            return { ...state, confirmOpen: true }

        case actions.CLOSE_CONFIRM:
            return { ...state, confirmOpen: false }

        default:
            return state
    }
}
