import { Link } from "react-router-dom"
import styles from "./ButtonLink.module.css"
const ButtonLink = ({url}) => {
  return (
    <Link className={styles.link} to={url}>
        <span>Learn More</span><img src="/assets/img/icons/arrow_right.svg" alt="arrow right logo" />
    </Link>
  )
}

export default ButtonLink