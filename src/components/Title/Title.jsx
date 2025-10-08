import styles from "./Title.module.css"
const Title = ({info}) => {
    return (
        <div>
        <p className={`${styles.info} border_item _radius8`}>{info}</p>

        </div>
    )
}

export default Title