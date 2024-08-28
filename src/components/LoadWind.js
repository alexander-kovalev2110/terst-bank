import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { closeLoad } from '../store/actions/modalWindAction'

export const LoadWind = () => {
    const { open } = useSelector(state => ({
        open: state.modalWindRed.loadOpen
    }))

    const dispatch = useDispatch()

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}
                onClose={() => dispatch(closeLoad())}>
            <DialogTitle>
                <span>Завантажити csv</span>
                <IconButton
                    aria-label="close"
                    onClick={() => dispatch(closeLoad())}
                    sx={{
                        position: "absolute",
                        right: 10,
                        top: 10,
                        color: (theme) => theme.palette.grey[700]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography>
                    Тут задаються дані для завантаження
                </Typography>
            </DialogContent>
        </Dialog>
    );

}   
    
export default LoadWind 