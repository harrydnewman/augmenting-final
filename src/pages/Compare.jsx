import styles from '../styles/Compare.module.css'
import CompareButton from '../components/CompareButton'

export default function Compare(){
    return (
        <div className={styles.ComparePage}>
        <div className={styles.CompareTitleDiv}>
        <h1>Compare over time 📈:</h1>
        </div>
        <div className={styles.compareButtonDiv}>
            <CompareButton emoji={"⚡️"} text={"speed"}/>
            <CompareButton emoji={"🥸"} text={"anonymity"}/>
            <CompareButton emoji={"🏓"} text={"two-way"}/>
            <CompareButton emoji={"🎭"} text={"personality"}/>
        </div>
            {/* on click the return button needs to actually do something, but leave it for now */}
        </div>
    )
}