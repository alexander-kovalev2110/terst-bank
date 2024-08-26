import { SET_PROC_STATUS, SET_PUBLIC_STATUS } from "../actions/statusAction"

// export const PROC_STATUS = new Set(['all', 'wait', 'processed'])
export const PROC_STATUS = {
    all: 'all',
    wait: 'wait',
    proc: 'processed'
}

export const PUBLIC_STATUS = {
    all: 'all',
    wait: 'wait',
    public: 'published'
}

const initialState = {
    procStatus: PROC_STATUS.all,
    publicStatus: PUBLIC_STATUS.all
}

function statusReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROC_STATUS:
            return {...state, procStatus: action.status}

        case SET_PUBLIC_STATUS:
            return {...state, publicStatus: action.status}

        default:
            return state
    }
}

export default statusReducer
