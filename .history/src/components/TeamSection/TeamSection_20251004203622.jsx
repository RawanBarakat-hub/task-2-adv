import CardTeam from "../CardTeam/CardTeam"
import ContainerTwoCards from "../ContainerTwoCards/ContainerTwoCards"
import TitleSection from "../TitleSection/TitleSection"

const TeamSection = () => {
    let members=[
        {
            image:{
                source:"/assets/img/images/sara.png",
                alternative:"Sara photo"
            },
            name:"Ms. Sarah Anderson",
            title:"Qualification:Bachelor's Degree in Early Childhood Education",
            description:"Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
        },
        {
            image:{
                source:"/assets/img/images/david2.png",
                alternative:"David photo"
            },
            name:"Mr. David Roberts",
            title:"Qualification: Master's Degree in Elementary Education",
            description:"With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
        },
        {
            image:{
                source:"/assets/img/images/emily2.png",
                alternative:"Emily photo"
            },
            name:"Ms. Emily Hernandez",
            title:"Qualification: Diploma in Child Psychology",
            description:"Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
        },
        {
            image:{
                source:"/assets/img/images/michael.png",
                alternative:"Michael photo"
            },
            name:"Mr. Michael Turner",
            title:"Qualification: Bachelor's Degree in Physical Education",
            description:"Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
        },
        {
            image:{
                source:"/assets/img/images/jesica.png",
                alternative:"Jesica photo"
            },
            name:"Ms. Jessica Lee",
            title:"Qualification: Master's Degree in Special Education",
            description:"Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
        },
        {
            image:{
                source:"/assets/img/images/wiliam.png",
                alternative:"William photo"
            },
            name:"Mr. William Parker",
            title:"Qualification: Bachelor's Degree in Fine Arts",
            description:"Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
        }
    ]
    return (
        <section>
            <TitleSection info="Our Teachers With Experties" title="Our Team Members" description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning." />
            <ContainerTwoCards>
                {
                    members?.map((member,index)=>{
                        return <CardTeam key={index}
                        image={member?.image}
                        name={member?.name}
                        title={member?.title}
                        description={member?.description}
                        />
                    })
                }
            </ContainerTwoCards>
        </section>
    )
}

export default TeamSection