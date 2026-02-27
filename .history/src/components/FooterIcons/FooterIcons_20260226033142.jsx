import { socialItems } from "../../data"
import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia"
import styles from "./FooterIcons.module.css"
const FooterIcons = () => {
    return (
        <ul className={styles.list}>
                {
                    socialItems?.map((item,index)=>{
                        return <li key={index}>
                            <a className="_flex _align_center" href={item.url}><FooterSocialMedia url={item.url}
                            image={item.image} /> <span className={styles.info}>{item.text}</span></a>
                        </li>
                    })
                }
            </ul>
    )
}

export default FooterIcons