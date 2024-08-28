import data from "../../data/data"
import { SET_TABLE, SET_PAGE, NEXT_PAGE, PREVIOUS_PAGE, SELECTED } from "../actions/tableAction"


const columnDefault = [
    {"name": "№ платежу"},
    {"name": "Призначення"},
    {"name": "Статус обробки"},
    {"name": "Статус публікації"},
    {"name": "Сумма"},
    {"name": "Платник"},
    {"name": "Ризик"},
    {"name": "Дата списания"},
]

const initialState = {
    data: [],
    tabData: [],
    selected: [],   // Масив з індексами вибраних рядків
    page: 5,
    offset: 0,
    prev: true,
    next: true,
    column: columnDefault
}

function tableReducer(state = initialState, action) {
    const { data, offset, page } = state
    const nextOffset = offset + page
    const previousOffset = offset - page

    switch (action.type) {
        case SET_TABLE:
            return {...state, data: action.data, 
                tabData: action.data.filter((el, index) =>
                    ((index >= 0) && (index < page))),
                next: !(page < action.data.length) 
            }

        case NEXT_PAGE:
            return { ...state, offset: nextOffset,
                tabData: data.filter((el, index) =>
                    ((index >= nextOffset) && (index < nextOffset + page))),
                next: !((nextOffset + page) < data.length),
                prev: !(nextOffset > 0) 
                    }

        
        case PREVIOUS_PAGE:
            return { ...state, offset: previousOffset,
                tabData: data.filter((el, index) =>
                    ((index >= previousOffset) && (index < previousOffset + page))),
                next: !((previousOffset + page) < data.length),    
                prev: !(previousOffset > 0)
                    }
        
        case SET_PAGE:
            return {...state, page: action.page,
                offset: 0,
                tabData: data.filter((el, index) =>
                    ((index >= 0) && (index < action.page))),
                next: !(action.page < data.length),
                prev: true
            }

        case SELECTED:
            return {...state, selected: action.selec}
        
        default:
            return state
    }
  
}

export default tableReducer
