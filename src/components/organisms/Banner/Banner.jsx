import React from 'react'
import backgroundImage from "../../../assets/background-banner.jpg"

const Banner = ({ children, style }) => {
    return (
        <div id='banner'>
            <div
                style={{
                    padding: "30px 0",
                    backgroundImage: `url(${backgroundImage})`,
                    ...style
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Banner