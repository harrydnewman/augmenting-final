import styles from '../styles/Graph.module.css'

export default function Graph({title, subtitle, blurb, data, xText, yText, zeroText}){
    return (
        <div className={styles.GraphDiv}>
            <h2><strong>{title}:</strong> {subtitle}</h2>

            <p>{blurb}</p>


        </div>
    )
}