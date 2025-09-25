import styles from "./FaqContainer.module.css"
const FaqContainer = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
export default FaqContainer