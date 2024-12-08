import styles from '../styles/PersonalityBubble.module.css'

export default function ChatPersonalityBubble({text, image, gray}){
    if (gray){
        return (
            <div className={styles.PersonalityBubbleDiv} style={{justifyContent: 'flex-start'}}>
                <div className={styles.MessageAndTextBlue}>
                <p>{text}</p>
                <img src={image}></img>
                </div>
               
            </div>
        )
    }
    else {
        return (
            <div className={styles.PersonalityBubbleDiv} style={{justifyContent: 'flex-end'}}>
            <div className={styles.MessageAndTextGray}>
            <p>{text}</p>
            <img src={image}></img>
            </div>
           
        </div>
        )
    }
    
}