import TestimonialCard from "../TestimonialCard/TestimonialCard"
import TestimonialsContainer from "../TestimonialsContainer/TestimonialsContainer"
import TitleSection from "../TitleSection/TitleSection"
const TestimonialsSection = () => {
    let persons=[{
        image:{source:"/assets/img/images/jennifr.png",alternative:"jennifr photo"},
        name:"Jennifer B",
        description:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        image:{source:"/assets/img/images/david.png",alternative:"david photo"},
        name:"David K",
        description:"Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    },
    {
        image:{source:"/assets/img/images/emily.png",alternative:"emily photo"},
        name:"Emily L",
        description:"My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    },
    {
        image:{source:"/assets/img/images/jennifr.png",alternative:"jennifr photo"},
        name:"Rawan B",
        description:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    },
    {
        image:{source:"/assets/img/images/emily.png",alternative:"emily photo"},
        name:"Laila L",
        description:"My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    }]
    return (
        <section className="section_margin">
            <TitleSection info="Their Happy Words 🤗"
            title="Our Testimonials"
            description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."/>
            <TestimonialsContainer>
                 {persons?.map((person,index)=>{
                    return <TestimonialCard key={index} image={person?.image}
                    name={person?.name}
                    description={person?.description} />
                })}
                </TestimonialsContainer>
                
        </section>
    )
}
export default TestimonialsSection