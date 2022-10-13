import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import React from 'react'
import StatusChip from '../../molecules/StatusChip/StatusChip'
import "./Tabs.scss"

const headersTable = [
    {
        label: "Bill ID",
        align: 'left'
    },
    {
        label: "Date",
        align: 'left'
    },
    {
        label: "Bill Status",
        align: 'center'
    },
]

const fontStyle = (fontSize = "16px", fontWeight = "400") => {
    return {
        fontSize: fontSize,
        fontWeight: fontWeight
    }
}

const OrderStatus = () => {
    return (
        <div className='user-tab'>
            <Typography variant='h3'>Order Tracking</Typography>

            {/* <div
                style={{
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    borderRadius: "3px",
                    overflowX: "auto"
                }}
            > */}
            <Paper
                elevation={2}
                style={{
                    overflowX: "auto",
                    margin: "15px 0"
                }}
            >
                <TableContainer
                    sx={{
                        minWidth: "500px",
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>

                                {headersTable.map((item, index) => (
                                    <TableCell
                                        key={index}
                                        align={item.align}
                                    >
                                        <TableSortLabel
                                            hideSortIcon
                                            style={fontStyle("16px", "500")}
                                        >
                                            {item.label}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {dataTesting.map((item, index) => (
                                <TableRow
                                    key={index}
                                    hover
                                    onClick={() => console.log("aloooo")}
                                    sx={{
                                        "&.MuiTableRow-root.MuiTableRow-hover": {
                                            cursor: "pointer"
                                        }
                                    }}
                                >
                                    <TableCell style={fontStyle("12px")} align='left'>{item.billID}</TableCell>
                                    <TableCell style={fontStyle("12px")} align='left'>{item.date}</TableCell>
                                    <TableCell
                                        style={fontStyle("12px")}
                                        align='center'
                                    >
                                        <StatusChip
                                            label={item.status}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </div> */}
            </Paper>
        </div>
    )
}

export default OrderStatus

const dataTesting = [
    {
        billID: "0123456789",
        date: "22/07/2022",
        status: "deliveried"
    },
    {
        billID: "0123456789",
        date: "22/07/2022",
        status: "processing"
    },
    {
        billID: "0123456789",
        date: "22/07/2022",
        status: "denied"
    },
    {
        billID: "0123456789",
        date: "22/07/2022",
        status: "pending"
    }
]