import React from 'react'
import useShowQuestion from './useShowQuestion'
import "./Faq.scss"

const Faq = ({ question, answer }) => {

    const { handleActiveQuestion } = useShowQuestion()

    

    return (
        <div className="faq">
            <header onClick={handleActiveQuestion} className="faq__header">
                <button className="faq__header-btn">
                    <i className="ri-add-line"></i>
                </button>
                <p className="faq__header-question">{question}</p>
            </header>
            <p className="faq-answer">{answer}</p>
        </div>
    )
}

export default Faq