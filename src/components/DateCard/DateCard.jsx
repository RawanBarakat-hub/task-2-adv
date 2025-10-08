import styles from "./DateCard.module.css"
const DateCard = ({date}) => {
    let x=""
    let ms=[1,1,1]
    return (
        <div  className={`${styles.square} card_style _flex _align_center`}>
            <div>
            {
                ms.map((s)=>{
                    return <div>
                                <div>
                                {
                                    ms.map((m)=>{
                                        x=<span className={styles.image}><img src="/assets/img/icons/square_shadow_about.svg" alt="" className={styles.one} /><img src="/assets/img/icons/square_orange.svg" alt="" className={styles.two} /></span>
                                        return x
                                    })
                                }
                                </div>
                            </div>
                })
            }
            </div>
            <h2 className={`${styles.date} _title_style`}>{date}</h2>
            <div className={styles.line}><span className={styles.line_black}></span></div>
        </div>
    )
}

export default DateCard