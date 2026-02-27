import { socialItems } from "../../data"
import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia"
import styles from "./FooterIcons.module.css"
const FooterIcons = () => {
    return (
        <ul className={styles.list}>
                {
                    socialItems?.map((item,index)=>{
                        return <li key={index}>
                            <a className="_" href={item.url}><FooterSocialMedia url={item.url}
                            image={item.image} /> <span className="info">{item.text}</span></a>
                        </li>
                    })
                }
            </ul>
    )
}

export default FooterIcons
{/*  <div>
                <a href="mailto:hello@littlelearners.com" className="center">
                    <div className={`${styles.image} _radius6 center border_item`}>
                        <img src="/assets/img/icons/envelope.svg" alt="envelope logo" />
                    </div>
                    hello@littlelearners.com
                </a>
            </div> */}