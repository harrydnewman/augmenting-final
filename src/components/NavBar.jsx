import styles from '../styles/NavbarStyles.module.css';

export default function Navbar({ currentPage }) {
    const isCurrentPage = (page) => currentPage === page;

    return (
        <div className={styles.Navbar} style={{
            paddingLeft: isCurrentPage('/codeinchat') ? '7%' : isCurrentPage('/about') ? '14%' : '11%',
            paddingRight: isCurrentPage('/codeinchat') ? '7%' : isCurrentPage('/about') ? '14%' : '11%',
        }}>
            <div className={isCurrentPage('/about') ? styles.imessage : styles.unselectedButton}>
                <a href='/about'>
                    {isCurrentPage('/about') ? <p className={styles.fromThem}>❓about</p> : <p>❓</p>}
                </a>

            </div>
            <div className={isCurrentPage('/compare') ? styles.imessage : styles.unselectedButton}>
                <a href='/compare'>
                    {isCurrentPage('/compare') ? <p className={styles.fromThem}>📈compare</p> : <p>📈</p>}
                </a>

            </div>
            <div className={isCurrentPage('/codeinchat') ? styles.imessage : styles.unselectedButton}>
                <a href='/codeinchat'>
                    {isCurrentPage('/codeinchat') ? <p className={styles.fromThem}>🕵️‍♀️codeinchat</p> : <p>🕵️‍♀️</p>}
                </a>
            </div>
            <div className={isCurrentPage('/future') ? styles.imessage : styles.unselectedButton}>
                <a href='/future'>
                    {isCurrentPage('/future') ? <p className={styles.fromThem}>✨future</p> : <p>✨</p>}
                </a>
            </div>
        </div>
    );
}

