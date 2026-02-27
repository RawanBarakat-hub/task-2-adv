import { about_visions } from "../../data"
import CardVision from "../CardVision/CardVision"
import ContainerTwoCards from "../ContainerTwoCards/ContainerTwoCards"
import TitleSection from "../TitleSection/TitleSection"

const AboutSectionAbout = () => {
    return (
        <section id="mission">
            <TitleSection info="Mission & Visions"
            title="Our Mission & Visions"
            description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <ContainerTwoCards>
                {about_visions?.map((about_vision,index)=>{
                    return <CardVision key={index} 
                    title={about_vision?.title}
                    image={about_vision?.image}
                    description={about_vision?.description}/>
                })}
            </ContainerTwoCards>
        </section>
    )
}

export default AboutSectionAbout