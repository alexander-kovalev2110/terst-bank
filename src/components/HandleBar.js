import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Button} from "@mui/material"
import { Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ViewColumnIcon from "@mui/icons-material/ViewColumn"
import DownloadIcon from "@mui/icons-material/Download"

import { PROC_STATUS, PUBLIC_STATUS } from "../store/reducers/statusReducer"
import { setProcState, setPublicState } from "../store/actions/statusAction"
import { openColumn, openLoad, openSearch } from "../store/actions/modalWindAction"
import CheckColumn from "./CheckColumn"
import SearchFormWind from "./SearchFormWind"
import LoadWind from "./LoadWind"

export const HandleBar = () => {
    const { procStatus, publicStatus } = useSelector(state => state.statusRed)
    const dispatch = useDispatch()

    // const handleSearch = () => {
    //     //  Завантажити
    // }

    return (
        <div>
            <Toolbar>
                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">Статус обробки</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={procStatus}
                        label="Статус обробки"
                        onChange={(e) => dispatch(setProcState(e.target.value))}
                    >
                        <MenuItem value={PROC_STATUS.all}>Всі</MenuItem>
                        <MenuItem value={PROC_STATUS.wait}>Очікуе обробки</MenuItem>
                        <MenuItem value={PROC_STATUS.proc}>Опрацьовано</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">Статус публікації</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={publicStatus}
                        label="Статус публікації"
                        onChange={(e) => dispatch(setPublicState(e.target.value))}
                    >
                        <MenuItem value={PUBLIC_STATUS.all}>Всі</MenuItem>
                        <MenuItem value={PUBLIC_STATUS.wait}>Очікуе публікації</MenuItem>
                        <MenuItem value={PUBLIC_STATUS.public}>Опубліковано</MenuItem>
                    </Select>
                </FormControl>

                <Stack direction="row" spacing={10} sx={{marginLeft: '120px'}}>
                    <Button component="label" variant="outlined" endIcon={<SearchIcon />}
                                color="inherit" onClick={() => dispatch(openSearch())} sx={{ textTransform: 'none'}}>
                            Розширенний пошук
                    </Button>
                    <Button component="label" variant="outlined" endIcon={<ViewColumnIcon />}
                                color="inherit" onClick={() => dispatch(openColumn())} >
                    </Button>
                    <Button component="label" variant="outlined" endIcon={<DownloadIcon />}
                                color="inherit" onClick={() => dispatch(openLoad())} sx={{ textTransform: 'none'}}>
                            Завантажити .csv
                    </Button>
                </Stack>
            </Toolbar>

            <CheckColumn />
            <SearchFormWind />
            <LoadWind />
        </div>
        )
}

export default HandleBar
