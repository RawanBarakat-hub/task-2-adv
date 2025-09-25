import styles from "./NavTop.module.css"
const NavTop = () => {
    return (
        <div className={styles.nav_top}>
            <div className={styles.info}>
                <p>Admission is Open, Grab your seat now</p>
                <img src="/assets/img/icons/arrow_right.svg" alt="arrow right" />
            </div>
            <img className={styles.first} src="/assets/img/images/navphoto.png" alt="nav photo" />
            <img className={styles.two} src="/assets/img/images/navcircle.png" alt="circle photo" />
            <img className={styles.three} src="/assets/img/images/navtop2.png" alt="nav photo" />            
            <img className={styles.four} src="/assets/img/images/navcircle2.png" alt="circle photo" />
        </div>
    )
}

export default NavTop