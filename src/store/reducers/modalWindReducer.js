import * as actions from "../actions/modalWindAction"

const initialState = {
    columnOpen: false,
    confirmOpen: false,
    searchOpen: false,
    loadOpen: false,
    transOpen: false,
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

        case actions.OPEN_SEARCH:
            return { ...state, searchOpen: true }

        case actions.CLOSE_SEARCH:
            return { ...state, searchOpen: false }
    
        case actions.OPEN_LOAD:
            return { ...state, loadOpen: true }

        case actions.CLOSE_LOAD:
            return { ...state, loadOpen: false }

        case actions.OPEN_TRANS:
            return { ...state, transOpen: true }

        case actions.CLOSE_TRANS:
            return { ...state, transOpen: false }

        default:
            return state
    }
}
