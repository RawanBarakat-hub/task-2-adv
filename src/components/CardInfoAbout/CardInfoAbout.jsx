import styles from "./CardInfoAbout.module.css"
const CardInfoAbout = ({information}) => {
    return (
        <div>
            <h3 className={`${styles.title} _title_style`}>{information.title}</h3>
            <p className={`${styles.description} _description_style`}>{information.description}</p>
        </div>
    )
}

export default CardInfoAbout