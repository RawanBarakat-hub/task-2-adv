import styles from "./ContainerHero.module.css"
const ContainerHero = ({children}) => {
  return (
    <div className={styles.container_hero}>{children}</div>
  )
}

export default ContainerHero