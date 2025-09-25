import styles from "./FooterSocialContainer.module.css"
const FooterSocialContainer = ({children}) => {
    return (
        <div className={`${styles._gap} _flex`}>{children}</div>
    )
}

export default FooterSocialContainer