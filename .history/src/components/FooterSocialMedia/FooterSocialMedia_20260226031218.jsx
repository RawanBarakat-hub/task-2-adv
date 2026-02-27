import styles from "./FooterSocialMedia.module.css"
const FooterSocialMedia = ({url,image}) => {
    return (
        <a href={url}>
            <div >
                <img src={image?.source} alt={image?.alternative} />
            </div>
        </a>
    )
}

export default FooterSocialMedia