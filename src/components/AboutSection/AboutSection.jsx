import AboutContainer from "../AboutContainer/AboutContainer"
import CardAbout from "../CardAbout/CardAbout"
import TitleSection from "../TitleSection/TitleSection"

const AboutSection = () => {
    let cardsAbout=[
        {
            image:{content:"/assets/img/icons/graduation.svg",
            alternative:"graduation logo"},
            title:"Holistic Learning Approach",
            description:"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
        },
        {
            image:{content:"/assets/img/icons/crown.svg",
            alternative:"crown logo"},
            title:"Experienced Educators",
            description:"Our passionate and qualified teachers create a supportive and stimulating learning environment."
        },
        {
            image:{content:"/assets/img/icons/coffe.svg",alternative:"coffe logo"},
            title:"Nurturing Environment",
            description:"We prioritize safety and provide a warm and caring atmosphere for every child."
        },
        {
            image:{content:"/assets/img/icons/flag.svg",alternative:"flag logo"},
            title:"Play-Based Learning",
            description:"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        },
        {
            image:{content:"/assets/img/icons/ball.svg",alternative:"ball logo"},
            title:"Individualized Attention",
            description:"Our small class sizes enable personalized attention, catering to each child's unique needs."
        },
        {
            image:{content:"/assets/img/icons/person.svg",alternative:"person logo"},
            title:"Parent Involvement",
            description:"We foster a strong parent-school partnership to ensure seamless communication and collaboration."
        }
    ]
    return (
        <>
        <section className="section_margin">
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