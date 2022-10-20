import { Button, useMediaQuery } from '@mui/material'
import React from 'react'
import { ThemeConfig } from '../../../theme/ThemeConfig'

const MuiCustomButton = ({ onClick, type, children, style }) => {
    const smMatches = useMediaQuery("(min-width: 600px)")

    return (
        <Button
            onClick={onClick}
            type={type}
            style={{
                flex: 1,
                maxWidth: smMatches ? "150px" : "100%",
                padding: "10px 0",
                marginTop: "10px",
                borderRadius: "3px",
                backgroundColor: ThemeConfig.palette.primary.main,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "1px",
                ...style
            }}
        >
            { children }
        </Button>
    )
}

export default MuiCustomButton