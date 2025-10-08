import styles from "./ContainerTwoCards.module.css"
const ContainerTwoCards = ({children}) => {
    return (
        <div className={styles.container_two}>
            {children}
        </div>
    )
}

export default ContainerTwoCards