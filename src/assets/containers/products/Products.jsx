import React from 'react'
import "./Products.scss"
import ProductCard from '../../components/productCard/ProductCard'
import { modernLamp, industrialLamp, superbolwLamp, ultrawideLamp, roundnessLamp, sticknessLamp, nakednessLamp, superjetLamp } from "./importImages"


const Products = () => {
    return (
        <section className="products" id="products">
            <h2 className="section-title">our products</h2>
            <p className="section-description">Discover all our unique products that<br />are suitable for your home.</p>

            <div className="products__container">
                <ProductCard img={modernLamp} title="modern light" description="hanging light" price="14" />
                <ProductCard img={industrialLamp} title="industrial light" description="hanging light" price="20" />
                <ProductCard img={superbolwLamp} title="superbolw light" description="hanging light" price="18" />
                <ProductCard img={ultrawideLamp} title="ultrawide light" description="hanging light" price="16" />
                <ProductCard img={roundnessLamp} title="roundness light" description="hanging light" price="17" />
                <ProductCard img={sticknessLamp} title="Stickness light" description="hanging light" price="28" />
                <ProductCard img={nakednessLamp} title="superject light" description="hanging light" price="15" />
                <ProductCard img={superjetLamp} title="Nakedness light" description="hanging light" price="10" />
            </div>
        </section>
    )
}

export default Products