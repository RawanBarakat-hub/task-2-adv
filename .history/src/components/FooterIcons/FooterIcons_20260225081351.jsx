import styles from "./FooterIcons.module.css"
const FooterIcons = () => {
    const socialItems=[
        {
            url:"mailto:hello@littlelearners.com",
            text:"hello@littlelearners.com",
            image:{
                source:"/assets/img/icons/envelope.svg",
                alternative:"envelope logo"
            }
        },
        {
            url:"tel:+91 91813 23 2309",
            text:"+91 91813 23 2309",
            image:{
                source:"/assets/img/icons/phone.svg",
                alternative:"phone logo"
            }
        },
    ]
    return (
        <div className={styles.icon}>
            <div>
                <a href="mailto:hello@littlelearners.com" className="center">
                    <div className={`${styles.image} _radius6 center border_item`}>
                        <img src="/assets/img/icons/envelope.svg" alt="envelope logo" />
                    </div>
                    hello@littlelearners.com
                </a>
            </div>
            <div>
                <a href="tel:+91 91813 23 2309" className="center">
                    <div className={`${styles.image} _radius6 center border_item`}>
                        <img src="/assets/img/icons/phone.svg" alt="envelope logo" />
                    </div>
                    +91 91813 23 2309
                </a>
            </div>
            <div>
                <a href="https://www.google.com/map?q=latakia" className="center">
                    <div className={`${styles.image} _radius6 center border_item`}>
                        <img src="/assets/img/icons/location.svg" alt="location logo" />
                    </div>
                    Somewhere in the World
                </a>
            </div>

        </div>
    )
}

export default FooterIcons