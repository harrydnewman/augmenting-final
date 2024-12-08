import styles from '../styles/Compare.module.css'
import CompareButton from '../components/CompareButton'
import Graph from '../components/Graph'

export default function Compare(){
    const data = [
        { x: 10, y: 20, label: "A", link: "/information", icon: "🗿" },
        { x: 40, y: 90, label: "B", link: null, icon: "🎭" },
        { x: 80, y: 50, label: "C", link: null, icon: "💀" },
      ];
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
        <Graph title={"Speed"} subtitle={"the instantaneousness of our communication"} blurb={"Changes how much time it takes to reach us & how long we can think about the conversation"} data={data} xText={"now"} yText={"instant"} zeroText={"snail mail"}/>
            {/* on click the return button needs to actually do something, but leave it for now */}
        </div>
    )
}