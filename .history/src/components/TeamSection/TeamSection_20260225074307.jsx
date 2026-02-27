import { members } from "../../data"
import CardTeam from "../CardTeam/CardTeam"
import ContainerTwoCards from "../ContainerTwoCards/ContainerTwoCards"
import TitleSection from "../TitleSection/TitleSection"

const TeamSection = () => {
    return (
        <section id="teachers">
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