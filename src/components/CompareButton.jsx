import styles from '../styles/CompareButton.module.css'

export default function CompareButton({emoji, text}){
    return (
        <div className={styles.CompareButton}>
            <h5>{emoji} {text}</h5>
        </div>
    )
}