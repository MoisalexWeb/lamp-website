import { useState, useEffect } from "react"

const useSlidesPerView = () => {

    const [numSlides, setNumSlides] = useState("auto")

    const changeNumSlides = () => {
        if (window.innerWidth > 1050) setNumSlides(4)
        if (window.innerWidth <= 1050 && window.innerWidth > 800) setNumSlides(3)
        if (window.innerWidth <= 800 && window.innerWidth > 580) setNumSlides(2)
        if (window.innerWidth <= 580) setNumSlides(1)
    }

    useEffect(() => {
        
        changeNumSlides()

        window.addEventListener("resize", changeNumSlides)

        return () => {
            window.removeEventListener("resize", changeNumSlides)
        }
    }, [])


    return {
        numSlides
    }
}

export default useSlidesPerView