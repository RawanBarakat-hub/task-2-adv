import { useParams } from "react-router-dom"
import Gallery from "../../components/Gallery/Gallery"
const AcademyPart = () => {
    const params=useParams()
    let name=params.name
    let rooms=[
        {
            id:"classRooms",
            images:["/assets/img/images/class1.jpg",
                "/assets/img/images/class2.jpg",
                "/assets/img/images/class3.jpg",
                "/assets/img/images/class4.jpg",
                "/assets/img/images/class1.jpg",
                "/assets/img/images/class2.jpg",
                "/assets/img/images/class3.jpg",
                "/assets/img/images/class4.jpg"
            ],
            title:"Classrooms",
            description:"Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
        },
        {
            id:"library",
            images:["/assets/img/images/library1.jpg",
                "/assets/img/images/library2.jpg",
                "/assets/img/images/library3.jpg",
                "/assets/img/images/library4.jpg",
                "/assets/img/images/library1.jpg",
                "/assets/img/images/library2.jpg",
                "/assets/img/images/library3.jpg",
                "/assets/img/images/library4.jpg"
            ],
            title:"Library",
            description:"Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        },
        {
            id:"sciencsLab",
            images:["/assets/img/images/lab1.jpg",
                "/assets/img/images/lab2.jpg",
                "/assets/img/images/lab3.jpg",
                "/assets/img/images/lab4.jpg",
                "/assets/img/images/lab1.jpg",
                "/assets/img/images/lab2.jpg",
                "/assets/img/images/lab3.jpg",
                "/assets/img/images/lab4.jpg"
            ],
            title:"Science Lab",
            description:"Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
        },
        {
            id:"computerLab",
            images:["/assets/img/images/computer1.jpg",
                "/assets/img/images/computer2.jpg",
                "/assets/img/images/computer3.jpg",
                "/assets/img/images/computer4.jpg",
                "/assets/img/images/computer1.jpg",
                "/assets/img/images/computer2.jpg",
                "/assets/img/images/computer3.jpg",
                "/assets/img/images/computer4.jpg"
            ],
            title:"Computer Lab",
            description:"Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
        },
        {
            id:"garden",
            images:["/assets/img/images/garden1.jpg",
                "/assets/img/images/garden2.jpg",
                "/assets/img/images/garden3.jpg",
                "/assets/img/images/garden4.jpg",
                "/assets/img/images/garden1.jpg",
                "/assets/img/images/garden2.jpg",
                "/assets/img/images/garden3.jpg",
                "/assets/img/images/garden4.jpg"
            ],
            title:"Garden and Nature Area",
            description:"Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
        },
    ]
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