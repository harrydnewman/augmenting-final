import styles from '../styles/ImageRightTextLeft.module.css'

export default function ImageRightTextLeft({image, text}){
    return (
        <div className={styles.mainDiv}>
            <div className={styles.text}>
                <p>{text}</p>
            </div>
            <div className={styles.image}>
                <img src={image}></img>
            </div>
        </div>
    )
}