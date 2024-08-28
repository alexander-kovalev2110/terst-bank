import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Button} from "@mui/material"
import ViewColumnIcon from "@mui/icons-material/ViewColumn"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { GROUP_ACTION } from "../store/reducers/groupReducer"
import { setGroupAction } from "../store/actions/groupAction"
import { setPage } from "../store/actions/tableAction"
import { openConfirm, openTrans } from "../store/actions/modalWindAction"
import ConfirmWind from "./ConfirmWind"
import TransWind from "./TransWind"

export const GroupBar = () => {
    const { groupAction } = useSelector(state => state.groupRed)
    const { page } = useSelector(state => state.tableRed)

    const dispatch = useDispatch()

    const openConfirmWind = (event) => {
        console.log("openConfirmWind", event.target.value)
        dispatch(openConfirm(event.target.value))
    }

    return (
        <Toolbar>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-helper-label">Дії з таблицею</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Статус обробки"
                    onChange={openConfirmWind}
                >
                    <MenuItem value={GROUP_ACTION.remove}>   Зняти з підтвердження</MenuItem>
                    <MenuItem value={GROUP_ACTION.confirm}>   Підтвердити банківскі операції</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-simple-select-helper-label">На сторинці зараз</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Статус обробки"
                    onChange={(e) => dispatch(setPage(e.target.value))}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
            <Button component="label" variant="outlined" endIcon={<AddCircleOutlineIcon />}
                                color="inherit" onClick={() => dispatch(openTrans())} sx={{ textTransform: 'none'}}>
                            Додати банківську транзакцiю
            </Button>

            <ConfirmWind />
            <TransWind />
        </Toolbar>
    )
}

export default GroupBar