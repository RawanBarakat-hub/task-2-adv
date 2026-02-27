import styles from "./FooterList.module.css"
import { HashLink } from "react-router-hash-link"
const FooterList = ({title,items}) => {
    return (
        <div className={styles.footer_list}>
            >{title}</>
            <ul className="_list_none">
                {items?.map((item,index)=>{
                    return <li kex={index}><HashLink smooth kex={index}  to={item?.url}>{item?.content}</HashLink></li>
                })}
            </ul>
        </div>
    )
}

export default FooterList