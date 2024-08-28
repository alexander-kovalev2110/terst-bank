export const OPEN_COLOMN = "OPEN_COLOMN "
export const CLOSE_COLOMN  = "CLOSE_COLOMN "

export const OPEN_CONFIRM = "OPEN_CONFIRM"
export const CLOSE_CONFIRM = "CLOSE_CONFIRM"

export const OPEN_SEARCH = "OPEN_SEARCH"
export const CLOSE_SEARCH = "CLOSE_SEARCH"

export const OPEN_LOAD = "OPEN_LOAD"
export const CLOSE_LOAD = "CLOSE_LOAD"

export const OPEN_TRANS = "OPEN_TRANS"
export const CLOSE_TRANS = "CLOSE_TRANS"

export const openColumn = () => ({
    type: OPEN_COLOMN
})

export const closeColumn  = () => ({
    type: CLOSE_COLOMN 
})

export const openConfirm = () => ({
    type: OPEN_CONFIRM
})

export const closeConfirm = () => ({
    type: CLOSE_CONFIRM
})

export const openSearch = () => ({
    type: OPEN_SEARCH
})

export const closeSearch = () => ({
    type: CLOSE_SEARCH
})

export const openLoad = () => ({
    type: OPEN_LOAD
})

export const closeLoad = () => ({
    type: CLOSE_LOAD
})

export const openTrans = () => ({
    type: OPEN_TRANS
})

export const closeTrans = () => ({
    type: CLOSE_TRANS
})