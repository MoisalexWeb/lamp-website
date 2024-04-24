import React from 'react'
import "./FeatureCard.scss"

const FeatureCard = ({ children }) => {
    return (
        <div className="feature-card">
            <h3 className="feature-card-text">{children}</h3>
        </div>
    )
}

export default FeatureCard