import styles from "./CardAbout.module.css"
const CardAbout = ({image,title,description,variant = "default",style}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`} style={style}>
        <div className={styles.image}>
            <img src={image?.content} alt={image?.alternative} />
          </div>
          <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
export default CardAbout