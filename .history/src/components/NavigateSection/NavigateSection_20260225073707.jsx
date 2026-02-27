import AcademyCard from "../AcademyCard/AcademyCard"
import NavigateContainer from "../NavigateContainer/NavigateContainer"
import TitleSection from "../TitleSection/TitleSection"

const NavigateSection = () => {
    return (
        <section className="section_margin">
            <TitleSection info="Explore More"
            title="Navigate through our Pages"
            description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school" />
            <NavigateContainer>
                {academies?.map((academy,index)=>{
                    return <AcademyCard key={index}
                    title={academy.title}
                    description={academy.description}
                    url={academy.url}/>
                })}
            </NavigateContainer>
        </section>
    )
}
export default NavigateSection