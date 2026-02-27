import styles from "./FooterSocialMedia.module.css"
const FooterSocialMedia = ({url,image}) => {
    return (
        <a href={url} className={`${styles.image} center border_item _radius8`}>
            <img src={image?.source} alt={image?.alternative} />
        </a>
    )
}

export default FooterSocialMedia