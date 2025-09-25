import styles from "./AboutContainer.module.css"
const AboutContainer = ({children}) => {
    return (
        <div className={styles.about_container}>{children}</div>
    )
}

export default AboutContainer