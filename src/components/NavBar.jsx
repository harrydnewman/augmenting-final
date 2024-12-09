import styles from '../styles/NavbarStyles.module.css'

export default function Navbar({ currentPage }) {
    return (
        <div className={styles.Navbar}>
            <div className={styles.imessage}>
                <p className={styles.fromThem}>❓about</p>
            </div>
            <div className={styles.unselectedButton}>
                <p>📈</p>
            </div>
            <div className={styles.unselectedButton}>
                <p>🕵️‍♀️</p>
            </div>
            <div className={styles.unselectedButton}>
                <p>✨</p>
            </div>
        </div>
    )
}