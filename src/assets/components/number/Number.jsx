import React from 'react'
import "./Number.scss"

const Number = ({ number, text }) => {
    return (
        <div className="number">
            <h3 className="number-num">
                {number}
                <span>+</span>
            </h3>
            <p className="number-text">{text}</p>
        </div>
    )
}

export default Number