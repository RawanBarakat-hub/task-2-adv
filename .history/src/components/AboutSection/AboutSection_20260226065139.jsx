import { cardsAbout } from "../../data"
import AboutContainer from "../AboutContainer/AboutContainer"
import CardAbout from "../CardAbout/CardAbout"
import TitleSection from "../TitleSection/TitleSection"

const AboutSection = () => {
    
    return (
        <>
        <section id="features" className={$st}>
            <TitleSection info="Children Deserve Bright Future"
            title="Our Benefits"
            description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>
            <AboutContainer>
                {cardsAbout?.map((cardAbout,index)=>{
                    return (
                        <CardAbout key={index} image={cardAbout?.image}
                    title={cardAbout?.title}
                    description={cardAbout?.description} />
                    )
                })}
            </AboutContainer>
        </section>
        </>
    )
}

export default AboutSection