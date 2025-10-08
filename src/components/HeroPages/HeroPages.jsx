import Title from "../Title/Title"
import styles from "./HeroPages.module.css"
const HeroPages = ({info,title,description}) => {
    const rows = 4;
    const starSrc = "/assets/img/icons/square_shadow.svg";       
    return (
        <div className={`${styles.hero_pages} _flex _justify_center _align_center border_item radius12`}>
            <div className={styles.square_images}>
                {Array.from({ length: rows }).map((_, rowIndex) => {
                const starsCount = rows - rowIndex;
                return (
                <div key={rowIndex}>
                    {Array.from({ length: starsCount }).map((i) => (
                    <img
                        key={i}
                        src={starSrc}
                        alt="star"
                    />
                    ))}
                </div>
                );
            })}
            </div>
            <div>
                <Title info={info}/>
                <p className={`${styles.title} _title_style`}>{title}</p>
            </div>
            <p className={`${styles.description} _description_style`}>{description}</p> 
        </div>
    )
}

export default HeroPages