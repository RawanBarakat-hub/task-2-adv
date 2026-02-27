import AcademyCard from "../AcademyCard/AcademyCard"
import NavigateContainer from "../NavigateContainer/NavigateContainer"
import TitleSection from "../TitleSection/TitleSection"

const NavigateSection = () => {
    let academies=[{
        title:"About Us",
        description:"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
        url:"/"
    },{
        title:"Academics",
        description:"Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
        url:"/"
    },{
        title:"Student Life",
        description:"Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
        url:"/"
    },{
        title:"Admissions",
        description:"Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
        url:"/"
    }]
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