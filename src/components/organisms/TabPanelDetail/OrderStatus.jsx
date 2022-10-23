/**
 * Order Status (Order Tracking) tab for User Profile
 * file: OrderStatus.jsx
 */

import { CloseOutlined } from '@mui/icons-material'
import { Divider, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography, useMediaQuery } from '@mui/material'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase/firebase-config'
import StatusChip from '../../molecules/StatusChip/StatusChip'
import Orders from '../Orders/Orders'

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
    }
}

const fontStyle = (fontSize = "16px", fontWeight = "400", fontColor = "#000") => {
    return {
        fontFamily: "Satoshi",
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: "140%",
        color: fontColor,
    }
}


const OrderStatus = () => {
    const mdMatches = useMediaQuery("(min-width: 900px)")

    //to open a modal
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = (order) => {
        setOpenModal(!openModal)
        setSelectedOrder(order)
    }

    //contained of list orders
    const [orders, setOrders] = useState([])
    //the selected order, used for opening the selected order
    const [selectedOrder, setSelectedOrder] = useState(null)

    useEffect(() => {
        //To get all orders from listOrdered 
        (async function () {
            const q = query(collection(db, "listOrdered"), where("userId", "==", auth.currentUser.uid))
            const querySnapshot = await getDocs(q)

            let result = [];
            querySnapshot.forEach((doc) => {
                result.push(doc.data())
            })
            setOrders([...result])
        })()
    }, [])


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
                <TableContainer>
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
                                        sx={[rowStyle("16px", "500"), {
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
                            {orders.map((item, index) => (
                                <TableRow
                                    key={index}
                                    hover
                                    onClick={() => handleOpenModal(item)}
                                    sx={{
                                        "&.MuiTableRow-root.MuiTableRow-hover": {
                                            cursor: "pointer"
                                        }
                                    }}
                                >
                                    <TableCell sx={rowStyle("14px")} align='right'>{index + 1}</TableCell>
                                    <TableCell align='left'
                                        sx={{
                                            ...rowStyle("14px", "500"),
                                            maxWidth: "180px",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden"
                                        }}
                                    >
                                        #{item.id}
                                    </TableCell>
                                    <TableCell sx={rowStyle("14px")} align='left'>{item.orderDate}</TableCell>
                                    <TableCell sx={rowStyle("14px")} align='left'>${item.Total}</TableCell>
                                    <TableCell
                                        sx={rowStyle("14px")}
                                        align='left'
                                    >
                                        <StatusChip label={item.orderStatus} />
                                    </TableCell>
                                </TableRow>
                            )
                            )}
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
                            padding: "15px"
                        }}
                    >
                        <div>
                            <div style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                            }}>
                                <CloseOutlined onClick={() => setOpenModal(false)} />
                            </div>

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <h1 style={fontStyle("19px", "700")}>#{selectedOrder?.id}</h1>
                                <div>
                                    <span style={{ ...fontStyle("13px", "400", "#696969"), marginRight: "5px" }}>Address:</span>
                                    <span style={fontStyle("16px")}>{selectedOrder?.orderAddress}</span>
                                </div>
                                <div>
                                    <span style={{ ...fontStyle("13px", "400", "#696969"), marginRight: "5px" }}>Date:</span>
                                    <span style={fontStyle("16px")}>{selectedOrder?.orderDate}</span>
                                </div>
                                <div style={{ alignSelf: "flex-end", textAlign: "right" }}>
                                    <h1 style={fontStyle("21px", "500")}>
                                        {selectedOrder?.Total.toLocaleString("vi-vn", {
                                            style: "currency",
                                            currency: "VND"
                                        })}
                                    </h1>
                                    <span style={{ ...fontStyle("12px", "400", "#696969") }}>
                                        *Subtotal: {selectedOrder?.subTotal.toLocaleString("vi-vn", {
                                            style: "currency",
                                            currency: "VND"
                                        })} -
                                        Shipping: {selectedOrder?.shippingTotal.toLocaleString("vi-vn", {
                                            style: "currency",
                                            currency: "VND"
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Divider sx={{ marginY: "10px" }} />
                        <Orders order={selectedOrder} />
                    </Paper>
                </Modal>
            </div>
        </div>
    )
}

export default OrderStatus