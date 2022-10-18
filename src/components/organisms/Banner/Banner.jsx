import React from 'react'
import TitleBanner from '../../atoms/TitleBanner'

const Banner = ({ children, style, bgImg }) => {
    return (
        <div id='banner'>
            <div
                style={{
                    padding: "60px 0",
                    backgroundImage: `url(${bgImg})`,
                    ...style
                }}
            >
                <TitleBanner
                    style={{
                        margin: 0,
                        fontFamily: ["Clash Display", "sans-serif"],
                        fontWeight: "400",
                        color: "#fff",
                        fontSize: "28px",
                        textAlign: "center",
                    }}
                >
                    { children }
                </TitleBanner>
            </div>
        </div>
    )
}

export default Banner