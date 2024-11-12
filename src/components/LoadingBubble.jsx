/* eslint-disable react/prop-types */
// LoadingBubble.js
import { useEffect, useState } from 'react';
import styles from '../styles/LoadingBubble.module.css';

export default function LoadingBubble({ duration }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);
        return () => clearTimeout(timer); // Clear timeout if component unmounts
    }, [duration]);

    return visible ? (
        <div className={styles.loadingBubble}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    ) : null;
}
