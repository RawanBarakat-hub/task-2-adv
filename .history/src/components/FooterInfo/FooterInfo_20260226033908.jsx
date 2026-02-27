import { policies } from "../../data"
import styles from "./FooterInfo.module.css"
const FooterInfo = () => {
    
    return (
        <ul className={`${styles.info} _flex`}>
            {
                policies.map((policy,index)=>{
        
                return <li key={index}><a href={policy.url}>{policy.text}</a></li>
                })
}
        </ul>
    )
}


export default FooterInfo