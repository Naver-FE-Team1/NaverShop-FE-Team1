import React from 'react'

const TitleBanner = ({ style, children }) => {
    return (
        <h1 style={style}>
            {children}
        </h1>
    )
}

export default TitleBanner