import styles from "./CardVision.module.css"
const CardVision = ({title,image,description}) => {
    return (
        <div className={`${styles.card} card_style`}>
            <div className={`${styles.title_container} flex_between_center`}>
                <h3 className={`${styles.title} _title_style`}>{title}</h3>
                <img src={image.source} alt={image.alternative} />
            </div>
            <p className="_description_style">{description}</p>
        </div>
    )
}

export default CardVision