import AwardsContainer from "../AwardsContainer/AwardsContainer"
import CardAbout from "../CardAbout/CardAbout"
import TitleSection from "../TitleSection/TitleSection"

const AwardsSection = () => {
    let awards=[
        {
            image:{content:"/assets/img/icons/fragment.svg",alternative:"fragment icon"},
            title:"Outstanding Early Childhood Education Awar",
            description:"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            image:{content:"/assets/img/icons/statistics.svg",alternative:"statistics icon"},
            title:"Innovative STEAM Education Award",
            description:"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            image:{content:"/assets/img/icons/symbol.svg",alternative:"symbol icon"},
            title:"Environmental Stewardship Award",
            description:"Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
        {
            image:{content:"/assets/img/icons/graduation.svg",alternative:"fragment icon"},
            title:"Outstanding Early Childhood Education Awar",
            description:"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            image:{content:"/assets/img/icons/crown.svg",alternative:"statistics icon"},
            title:"Innovative STEAM Education Award",
            description:"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            image:{content:"/assets/img/icons/flag.svg",alternative:"symbol icon"},
            title:"Environmental Stewardship Award",
            description:"Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
        {
            image:{content:"/assets/img/icons/person.svg",alternative:"fragment icon"},
            title:"Outstanding Early Childhood Education Awar",
            description:"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            image:{content:"/assets/img/icons/coffe.svg",alternative:"statistics icon"},
            title:"Innovative STEAM Education Award",
            description:"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        }
    ]
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