import AboutSection from "../AboutSection/AboutSection"
import FaqSection from "../FaqSection/FaqSection"
import Footer from "../Footer/Footer"
import NavigateSection from "../NavigateSection/NavigateSection"
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection"


const Main = () => {
    return (
        <main>
            <AboutSection/>
            <TestimonialsSection />
            <FaqSection/>
            <NavigateSection/>
            <Footer/>
        </main>
    )
}

export default Main