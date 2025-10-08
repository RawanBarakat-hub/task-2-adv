import styles from "./StudentCard.module.css"
const StudentCard = ({image,title,description}) => {
    return (
        <div className={`${styles.card} center card_style`}>
            <div className={styles.background}></div>
            <div className={styles.image_wrapper}>
                <img src={image.source} alt={image.alternative} className={styles.image}/>
            </div>
            <h3 className={`${styles.title} card_title_style`}>{title}</h3>
            <p className="card_paragraph_style">{description}</p>
        </div>
    )
}

export default StudentCard