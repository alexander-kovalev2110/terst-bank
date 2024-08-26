import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Toolbar } from "@mui/material"

import { GROUP_ACTION } from "../store/reducers/groupReducer"
import { setGroupAction } from "../store/actions/groupAction"
import { setPage } from "../store/actions/tableAction"

export const GroupBar = () => {
    const { groupAction } = useSelector(state => state.groupRed)
    const { page } = useSelector(state => state.tableRed)

    const dispatch = useDispatch()

    return (
        <Toolbar>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-helper-label">Дії з таблицею</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={groupAction}
                    label="Статус обробки"
                    onChange={(e) => dispatch(setGroupAction(e.target.value))}

                >
                    <MenuItem value={GROUP_ACTION.remove}>Зняти з підтвердження</MenuItem>
                    <MenuItem value={GROUP_ACTION.confirm}>Підтвердити банківскі операції</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">На сторинці зараз</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={page}
                    label="Статус обробки"
                    onChange={(e) => dispatch(setPage(e.target.value))}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
        </Toolbar>
    )
}

export default GroupBar