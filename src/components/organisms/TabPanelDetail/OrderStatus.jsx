import { Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import StatusChip from '../../molecules/StatusChip/StatusChip'
import "./Tabs.scss"

const headersTable = [
    {
        label: "",
        align: 'left'
    },
    {
        label: "Bill ID",
        align: 'left'
    },
    {
        label: "Date",
        align: 'left'
    },
    {
        label: "Total",
        align: 'left'
    },
    {
        label: "Status",
        align: 'left'
    },
]

const rowStyle = (fontSize = "16px", fontWeight = "400") => {
    return {
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: "#212b36",

        borderColor: "#f4f6f8",
        paddingRight: "0",
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

            <div
                style={{
                    overflowX: "auto",
                    margin: "15px 0",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"
                }}
            >
                <TableContainer
                    sx={{
                        minWidth: "500px",
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow
                                style={{
                                    backgroundColor: "#f4f6f8"
                                }}
                            >
                                {headersTable.map((item, index) => (
                                    <TableCell
                                        key={index}
                                        align={item.align}
                                        sx={[rowStyle("15px", "500"), {
                                            color: "#2a343e",
                                        }]}
                                    >
                                        <TableSortLabel
                                            hideSortIcon
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
                                    <TableCell sx={rowStyle("13px")} align='center'>{item.index}</TableCell>
                                    <TableCell sx={rowStyle("13px", "500")} align='left'>#{item.billID}</TableCell>
                                    <TableCell sx={rowStyle("13px")} align='left'>{item.date}</TableCell>
                                    <TableCell sx={rowStyle("13px")} align='left'>${item.total}</TableCell>
                                    <TableCell
                                        sx={rowStyle("13px")}
                                        align='left'
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
            </div>
        </div>
    )
}

export default OrderStatus

const dataTesting = [
    {
        index: 0,
        billID: "0123456789",
        date: "22/07/2022",
        total: 300.00,
        status: "dispatched"
    },
    {
        index: 1,
        billID: "0123456789",
        date: "22/07/2022",
        total: 10.00,
        status: "completed"
    },
    {
        index: 2,
        billID: "0123456789",
        date: "22/07/2022",
        total: 29.39,
        status: "cancelled"
    },
    {
        index: 3,
        billID: "0123456789",
        date: "22/07/2022",
        total: 9991.00,
        status: "pending"
    }
]