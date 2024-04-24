import React from 'react'
import { register } from 'swiper/element/bundle';
import ProductCard from "../productCard/ProductCard"
import { modernLamp, industrialLamp, ultrawideLamp, roundnessLamp, superbolwLamp } from "./importImages"
import useSlidesPerView from "./useSlidesPerView"
import "./SliderProducts.scss"

const SliderProducts = () => {

    register();

    const { numSlides } = useSlidesPerView()


    return (
        <swiper-container
            slides-per-view={numSlides}
            speed="300"
            loop="true"
            navigation="true"
            space-between="10"
            grab-cursor="true"
            style={
                {
                "--swiper-navigation-color": "#ce603b"
                }
            }
        >

            <swiper-slide>
                <ProductCard title="modern light" description="hanging light" img={modernLamp} price="14" />
            </swiper-slide>

            <swiper-slide>
                <ProductCard title="industrial light" description="hanging light" img={industrialLamp} price="20" />
            </swiper-slide>

            <swiper-slide>
                <ProductCard title="superbolw light" description="hanging light" img={superbolwLamp} price="18" />
            </swiper-slide>

            <swiper-slide>
                <ProductCard title="ultrawide light" description="hanging light" img={ultrawideLamp} price="16" />
            </swiper-slide>

            <swiper-slide>
                <ProductCard title="reundness light" description="hanging light" img={roundnessLamp} price="17" />
            </swiper-slide>

        </swiper-container>
    )
}

export default SliderProducts