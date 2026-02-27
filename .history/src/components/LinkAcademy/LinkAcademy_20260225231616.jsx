import styles from "./LinkAcademy.module.css"

const LinkAcademy = ({ id, text, onClick, isActive }) => {
    return (
        <button
            id={id}
            onClick={() => onClick(id)}
            className={`${styles.link} border_item _radius6 ${isActive ? styles.active : ""}`}
        >
            {text}
        </button>
    )
}

export default LinkAcademy