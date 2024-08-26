export const OPEN_COLOMN = "OPEN_COLOMN "
export const CLOSE_COLOMN  = "CLOSE_COLOMN "

export const OPEN_CONFIRM = "OPEN_CONFIRM"
export const CLOSE_CONFIRM = "CLOSE_CONFIRM"

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
