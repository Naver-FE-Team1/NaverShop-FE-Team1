import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ content, radius, color, fontSize, borderColor, backgroundColor, width, height, onClick }) => {
    return (
        <button
            style={{
                fontSize: `${fontSize}px`,
                borderRadius: `${radius}px`,
                color: color,
                border: `1px solid ${borderColor}`,
                backgroundColor: backgroundColor,
                width: width,
                height: height,
            }}
            className= 'btn'
            onClick={onClick}
        >
            {content}
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.string,
    radius: PropTypes.number,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    content: '',
    radius: null,
    color: null,
    fontSize: 16,
    borderColor: null,
    backgroundColor: null,
    width: null,
    height: null,
    onClick: null,
}


export default Button;