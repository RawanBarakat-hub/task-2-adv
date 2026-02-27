import { persons } from "../../data"
import TestimonialCard from "../TestimonialCard/TestimonialCard"
import TestimonialsContainer from "../TestimonialsContainer/TestimonialsContainer"

import TitleSection from "../TitleSection/TitleSection"
const TestimonialsSection = () => {
    
    return (
        <section id="" className="section_margin">
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