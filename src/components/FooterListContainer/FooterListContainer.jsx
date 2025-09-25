import styles from "./FooterListContainer.module.css"
const FooterListContainer = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default FooterListContainer