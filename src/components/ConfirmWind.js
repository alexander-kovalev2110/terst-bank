import { useSelector, useDispatch } from "react-redux"

import { Dialog } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { DialogContent } from "@mui/material"
import { DialogActions } from "@mui/material"
import { Button } from "@mui/material"

import { closeConfirm } from "../store/actions/modalWindAction"

export const ConfirmWind = () => {
    const { open } = useSelector(state => ({
        open: state.modalWindRed.confirmOpen
    }))

    const dispatch = useDispatch()

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}
                onClose={() => dispatch(closeConfirm())}>
            <DialogTitle>
                <span>Підтвердити группову дію</span>
                <IconButton
                    aria-label="close"
                    onClick={() => dispatch(closeConfirm())}
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
                Ви підтверджуєте, що підтверджуєте банківські операції
            </DialogContent>
            <DialogActions>
                <Button component="label" variant="outlined" 
                    onClick={() => dispatch(closeConfirm())} sx={{ textTransform: 'none'}}>
                    Відминити
                </Button>
                <Button component="label" variant="outlined" 
                    onClick={() => dispatch(closeConfirm())} sx={{ textTransform: 'none'}}>
                    Підтвердити
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmWind 
