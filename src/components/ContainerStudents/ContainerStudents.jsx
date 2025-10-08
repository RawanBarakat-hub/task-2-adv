import styles from "./ContainerStudents.module.css"
const ContainerStudents = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default ContainerStudents