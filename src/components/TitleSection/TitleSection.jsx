import Title from "../Title/Title"
import styles from "./TitleSection.module.css"
const TitleSection = ({info,title,description}) => {
    return (
        <div className={styles.title_sections}>
            <Title info={info}/>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default TitleSection