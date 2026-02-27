import { socialItems } from "../../data"
import styles from "./FooterIcons.module.css"
const FooterIcons = () => {
    return (
        <div className={styles.icon}>
            <ul>
                {
                    socialItems?.map((item,index)=>{
                        return <li key={index}>
                            <a href=></a>
                        </li>
                    })
                }
            </ul>
        </div>
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