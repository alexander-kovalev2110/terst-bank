export const SET_PROC_STATUS = "SET_PROC_STATUS"
export const SET_PUBLIC_STATUS = "SET_PUBLIC_STATUS"

export const setProcState = (status) => ({
    type: SET_PROC_STATUS,
    status: status
})

export const setPublicState = (status) => ({
    type: SET_PUBLIC_STATUS,
    status: status
})
