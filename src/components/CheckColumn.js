import { useSelector, useDispatch } from "react-redux"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dialog } from "@mui/material"
import { DialogTitle } from "@mui/material"
import { IconButton } from "@mui/material"
import { DialogContent } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { checkedAction } from "../store/actions/columnAction"
import { closeColumn } from "../store/actions/modalWindAction"

export const CheckColumn = () => {
    const { checkColum } = useSelector(state => state.columnRed)
    const open = useSelector(state => state.modalWindRed.columnOpen)

    const dispatch = useDispatch()
    
    const handleChange = (index) => {
        dispatch(checkedAction(index))
    }

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}
                onClose={() => dispatch(closeColumn())}
        >
            <DialogTitle>
                <span>Вибір колонок для відображення</span>
                <IconButton
                    aria-label="close"
                    onClick={() => dispatch(closeColumn())}
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
                <FormGroup >
                    {checkColum.map((item, index) => (
                        <FormControlLabel key={index} control={
                            <Checkbox checked={item.checked} onChange={() => handleChange(index)} name="checked" />
                        }
                        label={item.text}
                    />
                    ))}
                </FormGroup>
            </DialogContent>
        </Dialog>
    )
}

export default CheckColumn
