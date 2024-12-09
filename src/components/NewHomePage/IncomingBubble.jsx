import styles from '../../styles/NewHomePage.module.css'

export default function IncomingBubble({text}){
    return (
        <div className={styles.imessage}>
            <p className={styles.fromThem}>{text}</p>
        </div>
    )
}