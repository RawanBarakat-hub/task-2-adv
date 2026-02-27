import { useParams } from "react-router-dom"
import Gallery from "../../components/Gallery/Gallery"
const AcademyPart = () => {
    const params=useParams()
    let name=params.name
    
    return (
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
  )
}

export default AcademyPart