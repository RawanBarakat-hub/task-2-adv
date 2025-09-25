import styles from "./NavigateContainer.module.css"
const NavigateContainer = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default NavigateContainer