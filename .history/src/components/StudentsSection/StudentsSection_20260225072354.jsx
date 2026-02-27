
import ContainerStudents from "../ContainerStudents/ContainerStudents"
import StudentCard from "../StudentCard/StudentCard"
import TitleSection from "../TitleSection/TitleSection"
const StudentsSection = () => {
    
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