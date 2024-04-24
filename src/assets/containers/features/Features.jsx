import React from 'react'
import Lamp from "../../components/lamp/Lamp"
import FeatureCard from '../../components/featureCard/FeatureCard'
import img from "/images/features-lamp.png"
import "./Features.scss"


const Features = () => {
    return (
        <section className="features">
            <div className="features__texts">
                <h2 className="section-title">latest features</h2>
                <p className="section-description">We always provide the latest and best features for your customer, don't worry, we provide the latest technology for you.</p>

                <div className="features__grid">
                    <FeatureCard>
                        voltage<br />settings
                    </FeatureCard>

                    <FeatureCard>
                        applicaction<br />control
                    </FeatureCard>

                    <FeatureCard>
                        voice<br />control
                    </FeatureCard>

                    <FeatureCard>
                        schedule<br />settings
                    </FeatureCard>
                </div>
            </div>

            <div className="features__image">
                <Lamp img={img} textOrientation="to-bottom" textPosition="right" />
            </div>
        </section>
    )
}


export default Features