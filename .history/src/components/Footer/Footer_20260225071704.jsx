import { icons, infoFooter } from "../../data"
import FooterIcons from "../FooterIcons/FooterIcons"
import FooterInfo from "../FooterInfo/FooterInfo"
import FooterList from "../FooterList/FooterList"
import FooterListContainer from "../FooterListContainer/FooterListContainer"
import FooterSocialContainer from "../FooterSocialContainer/FooterSocialContainer"
import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia"
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <footer className="border_item radius12">
            <div className={`${styles.footer_top}`}>
                <div className={styles.first}>
                    <img src="/assets/img/icons/Logo.svg" alt="logo photo" className={styles.first_img}/>
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    <FooterIcons/>
                </div>
                <FooterListContainer>
                    {infoFooter?.map((info,index)=>{
                return <FooterList key={index} title={info?.title}
                items={info?.items} />
            })}
                </FooterListContainer>
            </div>
            <div className={`${styles.second} _flex _justify_between _align_center`}>
                <FooterInfo/>
                <FooterSocialContainer>
                    {icons?.map((icon,index)=>{
                        return <FooterSocialMedia key={index}
                        url={icon?.url}
                        image={icon?.image} />
                    })}
                </FooterSocialContainer>
            </div>
            <p className={`${styles.description} _text_center`}>Copyright &copy; [2023] Little Learners Academy. All rights reserved.</p>
        </footer>
    )
}

export default Footer