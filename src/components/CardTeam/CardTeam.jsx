import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia"
import styles from "./CardTeam.module.css"
const CardTeam = ({image,name,title,description}) => {
    return (
        <div className={`${styles.card} card_style`}>
            <div className={`${styles.top_card} _flex _justify_between _align_center`}>
                <div className={`${styles.left_image} _flex _align_center`}>
                    <img src={image.source} alt={image.alternative} />
                    <h3>{name}</h3>
                </div>
                <div>
                    <FooterSocialMedia url="mailto:barakatrawan81@gmail.om" image={{source:"/assets/img/icons/envelope.svg",alternative:"message photo"}}/>
                </div>
            </div>
            <div className={`${styles.bottom_card} border_item `}>
                <h4 className={`${styles.title} title_two_style`}>{title}</h4>
                <p className="_description_style">{description}</p>
            </div>
        </div>
    )
}

export default CardTeam