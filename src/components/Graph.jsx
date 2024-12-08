import styles from '../styles/Graph.module.css'
import ScatterPlot from './LinePlot'
export default function Graph({title, subtitle, blurb, data, xText, yText, zeroText}){
    return (
        <div className={styles.GraphDiv}>
            <h2><strong>{title}:</strong> {subtitle}</h2>

            <p>{blurb}</p>

            <ScatterPlot data={data} xText={xText} yText={yText} zeroText={zeroText} />


        </div>
    )
}