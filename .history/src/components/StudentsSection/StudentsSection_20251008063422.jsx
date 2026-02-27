
import ContainerStudents from "../ContainerStudents/ContainerStudents"
import StudentCard from "../StudentCard/StudentCard"
import TitleSection from "../TitleSection/TitleSection"
const StudentsSection = () => {
    let students=[{
        image:{
            source:"/assets/img/images/student1.jpg",
            alternative:"student photo"
        },
        title:"Language Arts",
        description:"Reading, writing, storytelling, and communication skills."
    },
    {
        image:{
            source:"/assets/img/images/student2.jpg",
            alternative:"student photo"
        },
        title:"Mathematics",
        description:"Number sense, basic operations, problem-solving, and logic."
    },
    {
        image:{
            source:"/assets/img/images/student3.jpg",
            alternative:"student photo"
        },
        title:"Science",
        description:"Exploring the natural world through hands-on experiments and investigations."
    },
    {
        image:{
            source:"/assets/img/images/student4.jpg",
            alternative:"student photo"
        },
        title:"Social Studies",
        description:"Cultivating an understanding of diverse cultures and communities."
    },
    {
        image:{
            source:"/assets/img/images/student5.jpg",
            alternative:"student photo"
        },
        title:"Arts and Crafts",
        description:"Encouraging creativity through various art forms and crafts."
    },
    {
        image:{
            source:"/assets/img/images/student6.jpg",
            alternative:"student photo"
        },
        title:"Physical Education",
        description:"Promoting physical fitness, coordination, and teamwork."
    }
    ]
    return (
        <section>
            <TitleSection info="Our Features"
            title="What Students Learn"
            description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"/>
            <ContainerStudents>
                {
                    students?.map((student,index)=>{
                        return <StudentCard key={index} image={student?.image}

                        title={student?.title}
                        description={student?.description}
                        />
                    })
                }
            </ContainerStudents>
            
        </section>
    )
}

export default StudentsSection