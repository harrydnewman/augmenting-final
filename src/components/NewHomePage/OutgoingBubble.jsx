import styles from '../../styles/NewHomePage.module.css'
// look at home message bubble for styling stuff!!!
export default function OutgoingBubble({text}){
    return (
        <div className={styles.imessage}>
            <p className={styles.fromMe}>{text}</p>
        </div>
    )
}