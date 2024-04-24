const useShowQuestion = () => {

    const handleActiveQuestion = (e) => {
        const questions = [...document.querySelectorAll(".show-question")]

        if (e.target.classList.contains("show-question")) {
            questions.forEach(question => {
                question.classList.remove("show-question")
                question.nextElementSibling.removeAttribute("style")
            })
        } else {
            questions.forEach(question => {
                question.classList.remove("show-question")
                question.nextElementSibling.removeAttribute("style")
            })
            e.target.classList.add("show-question")
            const answer = e.target.nextElementSibling
            answer.style.height = `${answer.scrollHeight}px`
        }
    }

    return {
        handleActiveQuestion
    }
}

export default useShowQuestion