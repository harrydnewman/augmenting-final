/* eslint-disable react/prop-types */
import styles from '../styles/ChatBubble.module.css'

export default function ChatBubble({text}){
    return (
        <div className={styles.ChatBubbleDiv}>
            <p>{text}</p>
        </div>
    )
}