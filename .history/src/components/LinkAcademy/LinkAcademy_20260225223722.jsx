import styles from "./LinkAcademy.module.css"
import { Link } from "react-router-dom"

const LinkAcademy = ({id,text}) => {
    return (
        <button className={`${styles.link} border_item _radius6`} to={url}>{destination}</button>
    )
}

export default LinkAcademy