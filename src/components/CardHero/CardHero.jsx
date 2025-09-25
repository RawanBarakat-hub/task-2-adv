import styles from "./CardHero.module.css"
const CardHero = ({title,description}) => {
  return (
    <div className={styles.card_hero}>
        <h1>+{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default CardHero