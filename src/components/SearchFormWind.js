
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import { Dialog } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { DialogContent } from "@mui/material"
import { DialogActions } from "@mui/material"
import { Button } from "@mui/material"
import { Checkbox } from "@mui/material"
import { TextField } from "@mui/material"
import { FormControlLabel } from "@mui/material"

import { closeSearch } from "../store/actions/modalWindAction"

export const SearchFormWind = () => {
    const { open } = useSelector(state => ({
        open: state.modalWindRed.searchOpen
    }))

    const [input1, setInput1] = useState('30001');
    const [input2, setInput2] = useState('UA012345678901234567890');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const dispatch = useDispatch()

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}
                onClose={() => dispatch(closeSearch())}>
            <DialogTitle>
                <span>Фiльтри</span>
                <IconButton
                    aria-label="close"
                    onClick={() => dispatch(closeSearch())}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[700]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                    <Box component="form" noValidate autoComplete="off">
                        <TextField
                            margin="normal"
                            label="Код банку платника"
                            fullWidth
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            label="Рахунок платника"
                            fullWidth
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked1}
                                    onChange={(e) => setChecked1(e.target.checked)}
                                />
                            }
                            label="Повернуто отримовачу"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checked2}
                                    onChange={(e) => setChecked2(e.target.checked)}
                                />
                            }
                            label="Повернуто в бюджет"
                        />
                    </Box>
                </DialogContent>
            <DialogActions>
                <Button component="label" variant="outlined" sx={{ textTransform: 'none'}}>
                    Скинути все
                </Button>
                <Button component="label" variant="outlined" sx={{ textTransform: 'none'}}>
                    Застосуваты фiльтри
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SearchFormWind  
