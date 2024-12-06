import styles from '../styles/AboutText.module.css'

export default function AboutText({text}){
    return (
        <div className={styles.AboutTextDiv}>

        <p>{text}</p>
        </div>
    )
}