import React from 'react'
import "./ProductCard.scss"

const ProductCard = ({ img, title, description, price }) => {
    return (
        <div className="product-card">
            <figure className="product-card__figure">
                <img src={img} alt={title} className="product-card__figure-img" />
            </figure>

            <h3 className="product-card-title">{title}</h3>
            <p className="product-card-description">{description}</p>

            <div className="product-card__price">
                <p className="product-card__price-price"><span>$</span>{price}</p>
                <button className="product-card__price-btn" aria-label="Add to card">
                    <i className="ri-add-fill"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductCard