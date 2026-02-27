import styles from "./SectionRooms.module.css"
import TitleSection from "../TitleSection/TitleSection"
import LinkAcademy from "../LinkAcademy/LinkAcademy"
import Gallery from "../Gallery/Gallery"
import { links, rooms } from "../../data"

const SectionRooms = () => {
    return (
        <section id="gallery">
            <TitleSection info="Our Gallery"
            title="Our Rooms Gallery"
            description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
            <div className={styles.links_container}>
                {
                    links?.map((link,index)=>{
                        return <LinkAcademy key={index} id={link?.id} text={link?.text} />
                    })
                }
            </div>
            <div>
        {
                rooms?.map((room, index) => {
                if (room.id == name) {
                    return (
                    <Gallery
                        key={index}
                        images={room?.images}
                        title={room?.title}
                        description={room?.description}
                    />
                    )
                }
                if (name === "all") {
                    return rooms.map((room, index) => (
                    <Gallery
                        key={index}
                        images={room?.images}
                        title={room?.title}
                        description={room?.description}
                    />
                    ))
                }
                return null
                })
            }
            </div>
        </section>
    )
}

export default SectionRooms