import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
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
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className='user-tab'>
            <Typography variant='h3'>Order Tracking</Typography>

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
                                    onClick={handleOpenModal}
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

                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                >
                    <div
                        style={{
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: 'translate(-50%, -50%)',
                            width: "70%"
                        }}
                    >
                        dadsa
                    </div>
                </Modal>
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
        status: "rejected"
    },
    {
        billID: "0123456789",
        date: "22/07/2022",
        status: "pending"
    }
]