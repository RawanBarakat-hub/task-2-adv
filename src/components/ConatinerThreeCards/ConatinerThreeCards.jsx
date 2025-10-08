import styles from "./ContainerThreeCards.module.css"
const ConatinerThreeCards = ({children}) => {
    return (
        <div className={`${styles.container} _flex _flex_wrap _justify_between`}>
            {children}
        </div>
    )
}

export default ConatinerThreeCards