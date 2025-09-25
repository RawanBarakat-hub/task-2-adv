import styles from "./TitleSection.module.css"
const TitleSection = ({info,title,description}) => {
    return (
        <div className={styles.title_sections}>
            <p className={styles.info}>{info}</p>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default TitleSection