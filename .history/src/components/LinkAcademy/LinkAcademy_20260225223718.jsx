import styles from "./LinkAcademy.module.css"
import { Link } from "react-router-dom"

const LinkAcademy = ({id,text}) => {
    return (
        <Link className={`${styles.link} border_item _radius6`} to={url}>{destination}</Link>
    )
}

export default LinkAcademy