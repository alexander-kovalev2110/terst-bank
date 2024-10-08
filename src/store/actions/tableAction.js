import store from "../../index"
import data from "../../data/data"

export const SET_TABLE = "SET_TABLE"
export const SET_PAGE = "SET_PAGE"
export const NEXT_PAGE = "NEXT_PAGE"
export const PREVIOUS_PAGE = "PREVIOUS_PAGE"
export const SELECTED = "SELECTED"

export const setTable = (data) => ({
    type: SET_TABLE,
    data: data
})

export const setPage = (page) => ({
    type: SET_PAGE,
    page: page
})

export const previousPage = () => ({
    type: PREVIOUS_PAGE
})

export const nextPage = () => ({
    type: NEXT_PAGE
})

export const setSelected = (selec) => ({     // Оновлення масиву Selected
    type: SELECTED,
    selec: selec
})

export const fetchData = async () => {
    try {
        await store.dispatch(setTable(data))
    } catch (err) {
        console.log("Помилка читання файлу:", err)
    }
}
