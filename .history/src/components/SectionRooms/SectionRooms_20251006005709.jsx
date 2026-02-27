import styles from "./SectionRooms.module.css"
import TitleSection from "../TitleSection/TitleSection"
import LinkAcademy from "../LinkAcademy/LinkAcademy"

const SectionRooms = () => {
    let links=[{
        url:"/academy/all",
        destination:"All"
    },
    {
        url:"/academy/classRooms",
        destination:"Classrooms"
    },
    {
        url:"/academy/library",
        destination:"Library"
    },
    {
        url:"/academy/sciencsLab",
        destination:"Science Lab"
    },
    {
        url:"/academy/computerLab",
        destination:"Garden and Nature Area"
    },
    {
        url:"/academy/garden",
        destination:"Garden and Nature Area"
    }]
    return (
        <section>
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