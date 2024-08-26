import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import { Container, Paper } from "@mui/material"
import { Table } from "@mui/material"
import { TableBody } from "@mui/material"
import { TableCell } from "@mui/material"
import { TableContainer } from "@mui/material"
import { TableHead } from "@mui/material"
import { TableRow } from "@mui/material"
import { Checkbox } from "@mui/material"
import { Button } from "@mui/material"
import { Stack } from "@mui/material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import { nextPage, previousPage } from "../store/actions/tableAction"

export const BankTable = () => {
    const { tabData, column, prev, next } = useSelector(state => ({
        prev: state.tableRed.prev,
        next: state.tableRed.next,
        tabData: state.tableRed.tabData,
        column: state.tableRed.column
    }))

    const dispatch = useDispatch()

    const handleSelect = (index) => {
        console.log("Вибрано рядок: ", index)
    }

    const handleSelectAll = () => {
        console.log("Вибрані всі")
    }

    const datacol = tabData.map((item) => (Object.values(item).map((value) => value)))

    return (
        <Container sx={{ mt: 26 }}>
            <Box sx={{ flexGrow: 1, p: 2, width: '100%' }}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <Checkbox onChange={handleSelectAll}/>
                                { column.map((item) => (
                                    <TableCell key={item.name}>{item.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { datacol.map((item, index) => (
                                <TableRow key={index}>
                                    <Checkbox onChange={() => handleSelect(index)}/>
                                    { item.map((value, ind) =>  (
                                        <TableCell key={ind}>{value}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Stack direction="row" spacing={2} ml={2} mt={2}>
                    <Button variant="outlined" startIcon={<NavigateBeforeIcon />}
                            disabled={prev} sx={{ textTransform: 'none'}}
                            onClick={() => dispatch(previousPage())}>
                        Попередня сторінка
                    </Button>
                    <Button variant="outlined" startIcon={<NavigateNextIcon />}
                            disabled={next} sx={{ textTransform: 'none'}}
                            onClick={() => dispatch(nextPage())} >
                        Наступна сторінка
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default BankTable