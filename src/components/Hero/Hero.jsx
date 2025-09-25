import CardHero from "../CardHero/CardHero"
import ContainerHero from "../ContainerHero/ContainerHero"
import styles from "./Hero.module.css"
const Hero = () => {
    let cards=[{
        title:7000,
        description:"Students Passed Out"
    },
{
    title:37,
    description:"Awards & Recognitions"
},
{
    title:15,
    description:"Experience Educators"
}]
  return (
    <div className={styles.hero}>
        <div className={styles.image_wrapper}>
            <img src="/assets/img/images/children.jpg" alt="children photo" />
        </div>
        <div className={styles.info}>
            <p className={styles.first}>Welcome to Little Learners Academy</p>
            <p className={styles.second} >Where Young Minds Blossom and <span>Dreams Take Flight.</span> </p>
            <p className={styles.third}>Our kinder garden school provides a nurturing and stimulating environment, 
                fostering a love for learning that lasts a lifetime. Join us as we embark 
                on an exciting educational journey together!
            </p>
            <ContainerHero>
                {cards?.map((card,index)=>{
                    return <CardHero key={index} title={card?.title}
                    description={card?.description} />
                })}
            </ContainerHero>
        </div>
    </div>
  )
}

export default Hero