import React from 'react'
import Faq from '../../components/faq/Faq'
import Lamp from '../../components/lamp/Lamp'
import img from "/images/choose-lamp.png"
import "./WhyChoose.scss"

const WhyChoose = () => {
    return (
        <section className="why" id="choose-us">
            <div className="why__image">
                <Lamp img={img} textOrientation="to-top" textPosition="left" />
            </div>
            
            <div className="why__texts">
                <h2 className="section-title">why choose us</h2>
                <p className="section-description">Our products have won numerous awards and we can guarantee the unlimited quality of our products.</p>

                <div className="faq__container">
                    <Faq question="frequently new design" answer="We make new designs every year, fashion designs, trending and of the best quality." />
                    <Faq question="original production" answer="We are the industrial chain of quality lighting products and offer the most advantageous price." />
                    <Faq question="production with large stock" answer="You will not be left without the lamp you chose, we have a large stock possible in all models." />
                    <Faq question="professional quality control" answer="Our quality control does everything possible to send you the best possible product for your home." />
                </div>
            </div>            
        </section>
    )
}

export default WhyChoose