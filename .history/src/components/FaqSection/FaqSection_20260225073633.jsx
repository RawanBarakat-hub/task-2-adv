import FaqContainer from "../FaqContainer/FaqContainer"
import Question from "../Question/Question"
import TitleSection from "../TitleSection/TitleSection"

const FaqSection = () => {
    return (
        <section className="section_margin">
            <TitleSection info="Solutions For The Doubts"
            title="Frequently Asked Questions"
            description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education." />
            <FaqContainer>
                {faqQuestions?.map((faqQuestion,index)=>{
                    return <Question key={index}
                    question={faqQuestion?.question}
                    answer={faqQuestion?.answer} />
                })}
            </FaqContainer>
        </section>
    )
}

export default FaqSection