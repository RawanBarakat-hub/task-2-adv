import AwardsContainer from "../AwardsContainer/AwardsContainer"
import CardAbout from "../CardAbout/CardAbout"
import TitleSection from "../TitleSection/TitleSection"

const AwardsSection = () => {
    
    return (
        <section>
            <TitleSection info="Our Achievements"
            title="Our Awards and Recognitions"
            description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students." />
            <AwardsContainer title="More Awards"  variant="about">
                {awards?.map((award,index)=>{
                    return <CardAbout key={index}
                    image={award.image}
                    title={award.title}
                    description={award.description}/>
                })}
            </AwardsContainer>
        </section>
    )
}

export default AwardsSection