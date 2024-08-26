import  { combineReducers } from "redux"

import tableReducer from "./tableReducer"
import statusReducer from "./statusReducer"
import groupReducer from "./groupReducer"
import columnReducer from "./columnReducer"
import modalWindReducer from "./modalWindReducer"

const rootReducer = combineReducers({
    tableRed: tableReducer,
    statusRed: statusReducer,
    groupRed: groupReducer,
    columnRed: columnReducer,
    modalWindRed: modalWindReducer
})

export default rootReducer