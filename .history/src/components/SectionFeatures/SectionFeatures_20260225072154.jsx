import { cards } from "../../data"
import CardAbout from "../CardAbout/CardAbout"
import ConatinerThreeCards from "../ConatinerThreeCards/ConatinerThreeCards"
import TitleSection from "../TitleSection/TitleSection"

const SectionFeatures = () => {
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