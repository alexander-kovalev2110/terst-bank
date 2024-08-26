import Box from "@mui/material/Box"
import { Toolbar, Typography, Button } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

export const BankTitle = () => {
    const getInfo = () => {
        console.log("getInfo")
    }
    
    return (
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Банківські операції
            </Typography>
            <Box sx={{ ml: 'auto', p: 2 }}>
                <Button component="label" variant="outlined" endIcon={<InfoIcon />}
                        color="inherit" onClick={getInfo} sx={{ textTransform: 'none'}}>
                    Дані з банку
                </Button>
            </Box>
        </Toolbar>
    )
}

export default BankTitle