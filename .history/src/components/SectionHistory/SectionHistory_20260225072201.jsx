import HistoryContainer from "../HistoryContainer/HistoryContainer"
import TitleSection from "../TitleSection/TitleSection"

const SectionHistory = () => {
    
    return (
        <section>
            <TitleSection info="Our Progressive Journey"
            title="Our History"
            description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"/>
            <HistoryContainer dates={dates}
            information={information}/>
        </section>
    )
}

export default SectionHistory