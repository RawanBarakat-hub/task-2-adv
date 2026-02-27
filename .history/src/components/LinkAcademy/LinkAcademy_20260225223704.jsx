import styles from "./LinkAcademy.module.css"
import { Link } from "react-router-dom"

const LinkAcademy = ({id,destination}) => {
    return (
        <Link className={`${styles.link} border_item _radius6`} to={url}>{destination}</Link>
    )
}

export default LinkAcademy