import CardAbout from "../CardAbout/CardAbout"
import ConatinerThreeCards from "../ConatinerThreeCards/ConatinerThreeCards"
import TitleSection from "../TitleSection/TitleSection"

const SectionFeatures = () => {
    let cards=[{
        image:{
            content:"/assets/img/icons/book.svg",
            alternative:"Book photo"
        },
        title:"Thematic Learning",
        description:"Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
    },
    {
        image:{
            content:"/assets/img/icons/statistics.svg",
            alternative:"Statistics photo"
        },
        title:"STEAM Education",
        description:"We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
    },
    {
        image:{
            content:"/assets/img/icons/puzzle.svg",
            alternative:"Puzzle photo"
        },
        title:"Language Immersion",
        description:"Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
    },
    {
        image:{
            content:"/assets/img/icons/pen.svg",
            alternative:"Pen photo"
        },
        title:"Art and Creativity",
        description:"Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
    },
    {
        image:{
            content:"/assets/img/icons/sun.svg",
            alternative:"Sun photo"
        },
        title:"Outdoor Education",
        description:"Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
    },{
        image:{
            content:"/assets/img/icons/star2.svg",
            alternative:"Star photo"
        },
        title:"Play-Based Learning",
        description:"Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
    }]
    return (
        <section>
            <TitleSection info="Our Features"
            title="Our Special Features"
            description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"/>
            <ConatinerThreeCards>
                {
                    cards?.map((card,index)=>{
                        return <CardAbout key={index}
                        image={card?.image}
                        title={card?.title}
                        description={card?.description} />
                    })
                }
            </ConatinerThreeCards>
        </section>
    )
}

export default SectionFeatures