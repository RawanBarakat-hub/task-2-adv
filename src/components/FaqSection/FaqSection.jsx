import FaqContainer from "../FaqContainer/FaqContainer"
import Question from "../Question/Question"
import TitleSection from "../TitleSection/TitleSection"

const FaqSection = () => {
    let faqQuestions=[{
        question:"What are the school hours at Little Learners Academy?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"How do you handle food allergies and dietary restrictions?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"Is there a uniform policy for students?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"What is the teacher-to-student ratio at Little Learners Academy?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"What extracurricular activities are available for students?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"How do you handle discipline and behavior management?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"What extracurricular activities are available for students?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
        question:"How do I apply for admission to Little Learners Academy?",
        answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."

    }]
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