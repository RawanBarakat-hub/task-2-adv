import styles from "./NavBar.module.css"
import NavTop from "../NavTop/NavTop"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const NavBar = ({image,items}) => {
  const [show,setShow]=useState(false)
  const showNav=()=>{
    setShow(!show)
  }
  return (
    <nav className={styles.nav}>
        <NavTop/>
        <div className={styles.nav_bottom}>
            {/* <div className={styles.left}>
            </div> */}
              <img src={image?.source} alt={image?.alternative} className={styles.first_image} />

            <ul className={styles.list_nav}>
              {items.map((item,index)=>{
                return <li key={index}><NavLink to={item?.url}>{item?.content}</NavLink></li>
            })}
            </ul>
            <button onClick={showNav}><img src="/assets/img/icons/bars.svg" alt="bars icon"/></button>
            <div className={`${styles.nav_items} ${show ? styles.show : ""}`}>
              <ul>
              {items.map((item,index)=>{
                return <NavLink key={index} to={item?.url} className={({isActive})=>isActive && "active"}>{item?.content}</NavLink>
            })}
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar