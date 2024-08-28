import { useSelector, useDispatch } from "react-redux"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import { IconButton } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

import { closeTrans } from '../store/actions/modalWindAction'

export const TransWind = () => {
    const { open } = useSelector(state => ({
        open: state.modalWindRed.transOpen
    }))

    const dispatch = useDispatch()

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}
                onClose={() => dispatch(closeTrans())}>
            <DialogTitle>
                <span>Додати банківську транзакцi.</span>
                <IconButton
                    aria-label="close"
                    onClick={() => dispatch(closeTrans())}
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
    
export default TransWind