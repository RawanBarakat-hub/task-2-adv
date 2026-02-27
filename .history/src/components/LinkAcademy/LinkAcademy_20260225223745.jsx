import styles from "./LinkAcademy.module.css"


const LinkAcademy = ({id,text}) => {
    return (
        <button id={id} className={`${styles.link} border_item _radius6`}>{text}</button>
    )
}

export default LinkAcademy