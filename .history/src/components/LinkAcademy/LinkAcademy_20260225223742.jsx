import styles from "./LinkAcademy.module.css"
import { Link } from "react-router-dom"

const LinkAcademy = ({id,text}) => {
    return (
        <button id={id} className={`${styles.link} border_item _radius6`}>{text}</button>
    )
}

export default LinkAcademy