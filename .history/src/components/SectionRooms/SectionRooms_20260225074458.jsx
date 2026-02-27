import styles from "./SectionRooms.module.css"
import TitleSection from "../TitleSection/TitleSection"
import LinkAcademy from "../LinkAcademy/LinkAcademy"
import { links } from "../../data"

const SectionRooms = () => {
    
    return (
        <section id="gallery">
            <TitleSection info="Our Gallery"
            title="Our Rooms Gallery"
            description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
            <div className={styles.links_container}>
                {
                    links?.map((link,index)=>{
                        return <LinkAcademy key={index} url={link?.url} destination={link?.destination} />
                    })
                }
            </div>
        </section>
    )
}

export default SectionRooms