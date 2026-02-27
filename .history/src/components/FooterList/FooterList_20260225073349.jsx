import { Link } from "react-router-dom"
import styles from "./FooterList.module.css"
const FooterList = ({title,items}) => {
    return (
        <div className={styles.footer_list}>
            <h4>{title}</h4>
            <ul className="_list_none">
                {items?.map((item,index)=>{
                    return <li kex={index}>< kex={index}  to={item?.url}>{item?.content}</></li>
                })}
            </ul>
        </div>
    )
}

export default FooterList