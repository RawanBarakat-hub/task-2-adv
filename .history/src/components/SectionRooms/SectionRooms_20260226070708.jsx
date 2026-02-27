import { useState } from "react"
import styles from "./SectionRooms.module.css"
import TitleSection from "../TitleSection/TitleSection"
import LinkAcademy from "../LinkAcademy/LinkAcademy"
import Gallery from "../Gallery/Gallery"
import { links, rooms } from "../../data"

const SectionRooms = () => {

    const [selectedRoom, setSelectedRoom] = useState("all")
    const filteredRooms =
        selectedRoom === "all"
            ? rooms
            : rooms.filter(room => room.id === selectedRoom)
    return (
        <section id="gallery">
            <TitleSection
                info="Our Gallery"
                title="Our Rooms Gallery"
                description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />

            <div className=>
                {
                    links?.map((link, index) => (
                        <LinkAcademy
                            key={index}
                            id={link?.id}
                            text={link?.text}
                            onClick={setSelectedRoom}
                            isActive={selectedRoom === link?.id}
                        />
                    ))
                }
            </div>

            <div>
                {
                    filteredRooms.map((room, index) => (
                        <Gallery
                            key={index}
                            images={room?.images}
                            title={room?.title}
                            description={room?.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default SectionRooms