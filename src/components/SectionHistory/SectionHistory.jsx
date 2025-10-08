import HistoryContainer from "../HistoryContainer/HistoryContainer"
import TitleSection from "../TitleSection/TitleSection"

const SectionHistory = () => {
    let dates=[2023,2017,2012,2005,2000]
    let information=[
        {
            title:"Resilience and Future Horizons",
            description:"Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."},
        {
            title:"Innovation and Technology",
            description:"Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."},
        {
            title:"Expansion and Recognition",
            description:"These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
        },
        {
            title:"Inception and Growth",
            description:"Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
        },
        {
            title:"Inception and Growth",
            description:"Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
        }
    ]
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