import styles from '../styles/Compare.module.css'
import CompareButton from '../components/CompareButton'
import Graph from '../components/Graph'
import Navbar from '../components/NavBar';
export default function Compare(){
    const speedData = [
        { x: 90, y: 95, label: "A", link: "/artifacts/aichats", icon: "🤖" },
        { x: 50, y: 80, label: "B", link: '/artifacts/privatemessaging', icon: "📧" },
        { x: 5, y: 10, label: "C", link: '/artifacts/letters', icon: "📝" },
        { x: 80, y: 50, label: "D", link: "/artifacts/publicthreads", icon: "💬👥👥" },
        { x: 20, y: 40, label: "E", link: '/artifacts/graffiti', icon: "🗿🖊️" },
      ];
    return (
        <div className={styles.ComparePage}>
        <Navbar currentPage={"/compare"}/>
        <div className={styles.CompareTitleDiv}>
        <h1>Compare over time 📈:</h1>
        </div>
        <div className={styles.compareButtonDiv}>
            <CompareButton emoji={"⚡️"} text={"speed"}/>
            <CompareButton emoji={"🥸"} text={"anonymity"}/>
            <CompareButton emoji={"🏓"} text={"two-way"}/>
            <CompareButton emoji={"🎭"} text={"personality"}/>
        </div>
        <Graph title={"Speed"} subtitle={"the instantaneousness of our communication"} blurb={"Changes how much time it takes to reach us & how long we can think about the conversation"} data={speedData} xText={"now"} yText={"instant"} zeroText={"snail mail"}/>
        <Graph title={"Speed"} subtitle={"the instantaneousness of our communication"} blurb={"Changes how much time it takes to reach us & how long we can think about the conversation"} data={speedData} xText={"now"} yText={"instant"} zeroText={"snail mail"}/>
            {/* on click the return button needs to actually do something, but leave it for now */}
        </div>
    )
}