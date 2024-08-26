import { CHECKED } from "../actions/columnAction"

export const initialState = {
    checkColum: [
        {cheked: false, text: "№ платежу"},
        {cheked: false, text: "Призначення платежу"},
        {cheked: false, text: "Статус обробки"},
        {cheked: false, text: "Статус публікації"}
    ]
}

function columnReducer(state = initialState, action) {
    switch (action.type) {
        case CHECKED:
            return  state

        default:
            return state
    }
}

export default columnReducer