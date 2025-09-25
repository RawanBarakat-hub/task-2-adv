import styles from "./CardAbout.module.css"
const CardAbout = ({image,title,description}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={image?.content} alt={image?.alternative} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default CardAbout