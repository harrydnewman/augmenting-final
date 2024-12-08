import styles from '../styles/InfoTitle.module.css'

export default function InfoTitle({title, backLink}){
    return (
        <div className={styles.infoTitleDiv}>
            {/* arrow with back link */}
            <div className={styles.arrowDiv}>
                <a href={backLink}><h1>←</h1></a>
            </div>
            <div className={styles.textDiv}>
            <h1>{title}</h1>
            </div>
           
        </div>
    )
}