import { useMediaQuery } from '@mui/material'
import React from 'react'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    const smMatches = useMediaQuery("(min-width: 600px)")

    return (
        <div
            role={"tabpanel"}
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <div
                    style={{
                        padding: smMatches ? "0 5%" : "10px 5px"
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    )
}

export default TabPanel