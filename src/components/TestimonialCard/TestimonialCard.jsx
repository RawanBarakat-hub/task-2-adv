import styles from "./TestimonialCard.module.css"
const TestimonialCard = ({image,name,description,style}) => {
    let stars=[1,2,3,4,5]
    return (
        <div className={styles.card} style={style}>
            <div className={styles.image}>
                <img src={image.source} alt={image.alternative} />
            </div>

            <h3>{name}</h3>
            <div>
                {
                    stars.map((star,index)=>{
                        return <span><img src="/assets/img/icons/star.svg" alt="star photo" /></span>
                    })
                }
            </div>
            <p>{description}</p>
        </div>
    )
}

export default TestimonialCard