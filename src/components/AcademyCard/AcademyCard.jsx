import ButtonLink from "../ButtonLink/ButtonLink"
import styles from "./AcademyCard.module.css"
const AcademyCard = ({title,description,url}) => {
    let numbers=[1,2,3,4,5,6]
    return (
    <div className={styles.card}>
        <h2>{title}</h2>
        {numbers.map(
            (number)=>{
            return <span></span>
        }
        )}
        <p>{description}</p>
        <ButtonLink url={url} />
    </div>
    )
}

export default AcademyCard