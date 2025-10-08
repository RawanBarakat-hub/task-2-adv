import CardInfoAbout from "../CardInfoAbout/CardInfoAbout"
import DateCard from "../DateCard/DateCard"
import styles from "./HistoryContainer.module.css"
const HistoryContainer = ({dates,information}) => {
    return (
        <div className={`${styles.container} card_style`}>
            <div className={`${styles.line} center`}>
                <span className={styles.line_black}></span>
            </div>
            {
                dates.map((date,index)=>{
                    return <div key={index} className={`${styles.sub_container} _flex _align_center _justify_between`}>
                            <DateCard date={date}/>
                            <CardInfoAbout information={information[index]}/>
                        </div>
                })
            }
        </div>
    )
}

export default HistoryContainer