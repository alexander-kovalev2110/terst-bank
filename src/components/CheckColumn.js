import { useSelector, useDispatch } from "react-redux"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dialog } from "@mui/material"
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
            <FormGroup >
                {checkColum.map((item, index) => (
                    <FormControlLabel key={index} control={
                        <Checkbox checked={item.checked} onChange={() => handleChange(index)} name="checked" />
                    }
                    label={item.text}
                />
                ))}
            </FormGroup>
        </Dialog>
    )
}

export default CheckColumn
