import { useState } from "react"
import styles from "./Question.module.css"
const Question = ({question,answer}) => {
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    return (
        <div className={`${styles.question} ${show ? styles.show : ""}`}>
            <div className={styles.first_question}>
                <p>{question}</p>
                <button className={styles.btn} onClick={handleShow}><img src={show ? "/assets/img/icons/minus.svg" : "/assets/img/icons/plus.svg"} alt="plus logo" /></button>
            </div>
            {show && (
            <p className={styles.answer}>{answer}</p>
        )}
        </div>
    )
}

export default Question