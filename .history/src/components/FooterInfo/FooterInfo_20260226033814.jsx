import { policies } from "../../data"
import styles from "./FooterInfo.module.css"
const FooterInfo = () => {
    
    return (
        <div className={`${styles.info} _flex`}>
            <ul>
                {
                    policies.map((policy,index)=>{
                        return <li><a href={policy.}></a></li>
                    })
                }
            </ul>
        </div>
    )
}


export default FooterInfo