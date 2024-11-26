import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.AboutPage}>
            <div className={styles.AboutHeader}>
                <h1>Chat 💬</h1>
                <h1>Technology</h1>
            </div>
            <div className={styles.AboutInfo}>
                <p>Chats are instant shorthand conversations. They are often back and forth</p>

                <p>Throughout history, our modes of chatting have changed based on the tools we've used.</p>
            </div>
        </div>
    )

}