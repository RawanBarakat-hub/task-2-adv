import styles from "./FooterSocialMedia.module.css"
const FooterSocialMedia = ({url,image}) => {
    return (
        <a href={url}>
            <div className={`${styles.image} center border_item _radius8`}>
                <img src={image?.source} alt={image?.alternative} />
            </div>
        </a>
    )
}

export default FooterSocialMedia