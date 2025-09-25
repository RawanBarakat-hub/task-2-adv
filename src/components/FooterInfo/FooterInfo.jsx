import styles from "./FooterInfo.module.css"
const FooterInfo = () => {
    return (
        <div className={`${styles.info} _flex`}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
    )
}

export default FooterInfo