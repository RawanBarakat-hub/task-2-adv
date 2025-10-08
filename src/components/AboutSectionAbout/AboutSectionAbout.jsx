import CardVision from "../CardVision/CardVision"
import ContainerTwoCards from "../ContainerTwoCards/ContainerTwoCards"
import TitleSection from "../TitleSection/TitleSection"

const AboutSectionAbout = () => {
    let about_visions=[
        {
            image:{source:"/assets/img/icons/bottle.svg",
                alternative:"bottle icon"},
            title:"Mission",
            description:"At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
        },
        {
            image:{source:"/assets/img/icons/sun_glass.svg",
                alternative:"sun glass icon"},
            title:"Vision",
            description:"Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."

        }
    ]
    return (
        <section>
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