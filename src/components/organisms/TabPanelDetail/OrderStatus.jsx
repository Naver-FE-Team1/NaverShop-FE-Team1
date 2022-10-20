import { CloseOutlined } from '@mui/icons-material'
import { Divider, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'
import StatusChip from '../../molecules/StatusChip/StatusChip'
import ProductCheckout from '../ProductCheckout/ProductCheckout'
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

const fontStyle = (fontSize = "16px", fontColor = "#000", fontWeight = "400") => {
    return {
        fontFamily: "Clash Display",
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: "140%",
        color: fontColor,
    }
}

const OrderStatus = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const mdMatches = useMediaQuery("(min-width: 900px)")

    return (
        <div className='user-tab'>
            <Typography variant='h3'>My Orders</Typography>

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

                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                >
                    <Paper
                        style={{
                            backgroundColor: "#fff",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: 'translate(-50%, -50%)',
                            width: mdMatches ? "70%" : "95%",
                            height: "85%",
                            overflow: "auto",
                            padding: "20px 30px"
                        }}
                    >
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                padding: "10px",
                            }}>
                                <CloseOutlined onClick={() => setOpenModal(false)} />
                            </div>
                            
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px"
                            }}>
                                <span style={fontStyle("16px", "#5b5676")}>Subtotal:</span>
                                <span style={fontStyle("20px", ThemeConfig.palette.primary.main)}>£210</span>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px"
                            }}>
                                <span style={fontStyle("22px", "#5b5676")}>Total: </span>
                                <span style={fontStyle("26px", ThemeConfig.palette.primary.main)}>£250</span>
                            </div>
                        </div>
                        <Divider sx={{ marginY: "15px" }} />
                        <ProductCheckout />
                    </Paper>
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