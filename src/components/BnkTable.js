import React, { useState } from 'react';
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
    const { tabData, column, prev, next, data } = useSelector(state => ({
        prev: state.tableRed.prev,
        next: state.tableRed.next,
        tabData: state.tableRed.tabData,
        column: state.tableRed.column,
        data: state.tableRed.data
    }))

    const [selected, setSelected] = useState([])
    const [selectAll, setSelectedAll] = useState(false)
    
        const dispatch = useDispatch()

    const handleSelect = (pay) => {
        console.log("handleSelect")
        let newSelected = selected
        const i = selected.indexOf(pay[0])
        if (i === -1) {
            newSelected.push(pay[0])     // Додавання індексу до масиву selected
        } else {
            newSelected.splice(i, 1)     // Видалення індексу з масиву selected
        }
        
        setSelected(newSelected)
        dispatch(nextPage())
        dispatch(previousPage())
    }

    const handleSelectAll = () => {
        let newSelected = []
        if (!selectAll) {
            data.map((item) => {
                newSelected.push(item.pay)
            })
            setSelectedAll(true)
        } else {
            setSelectedAll(false)
        }

        setSelected(newSelected)
    }

    const isSelected = (pay) =>  { 
        if (selected.indexOf(pay[0]) !== -1) return true
        else return false
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
                                <TableRow key={index} 
                                    hover
                                    role="checkbox"
                                    checked={isSelected(item)}
                                >
                                    <TableCell padding="checkbox" id="tcell">
                                        <Checkbox
                                        onChange={() => handleSelect(item)}
                                        // onChange={() => {
                                        //     handleSelect(item)
                                        //     dispatch(nextPage())
                                        // }}
                                        checked={isSelected(item)}      // Показ чекбокса залежить від цього аргументу
                                        />
                                    </TableCell>
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