import React from 'react'
import "./PopularProducts.scss"
import SliderProducts from '../../components/sliderProducts/SliderProducts'

const PopularProducts = () => {
    return (
        <section className="popular-products" id="popular">
            <h2 className="section-title">popular products</h2>
            <p className="section-description">Find our best products faster and get the quality lights we have for you.</p>

            <SliderProducts />
        </section>
    )
}

export default PopularProducts