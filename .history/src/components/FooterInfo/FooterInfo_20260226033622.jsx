import styles from "./FooterInfo.module.css"
const FooterInfo = () => {
    const policies=[
        {
            url:"#",
            text:"Terms of Service"
        },
        {
            url:"#",
            text:"Privacy Policy"
        },
        {
            url:"#"
        }
    ]
    return (
        <div className={`${styles.info} _flex`}>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
        </div>
    )
}


export default FooterInfo