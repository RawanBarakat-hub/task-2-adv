import styles from "./Arrows.module.css"
const Arrows = ({ title, description, handleLeft, handleRight,variant="default" }) => {
    return (
        <div className={`${styles.arrows} ${styles[variant]} _between_center`}>
            <div className={styles.info}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.arrows}>
                <button onClick={handleLeft}>
                    <img src="/assets/img/icons/arrow-left.svg" alt="arrow-left" />
                </button>
                <button onClick={handleRight}>
                    <img src="/assets/img/icons/arrow-right.svg" alt="arrow-right" />
                </button>
            </div>
        </div>
    )
}

export default Arrows
