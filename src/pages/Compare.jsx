import styles from '../styles/Compare.module.css'
import CompareButton from '../components/CompareButton'
import Graph from '../components/Graph'
import Navbar from '../components/NavBar';
import { useState } from 'react';

const GraphTypes = {
    SPEED: 'speed',
    ANONYMITY: "anonymity",
    TWOWAY: "two-way",
    PERSONALITY: 'personality'
}

export default function Compare(){
    const speedData = [
        { x: 90, y: 95, label: "A", link: "/artifacts/aichats", icon: "🤖" },
        { x: 50, y: 80, label: "B", link: '/artifacts/privatemessaging', icon: "📧" },
        { x: 5, y: 10, label: "C", link: '/artifacts/letters', icon: "📝" },
        { x: 80, y: 50, label: "D", link: "/artifacts/publicthreads", icon: "💬👥👥" },
        { x: 20, y: 40, label: "E", link: '/artifacts/graffiti', icon: "🗿🖊️" },
      ];

      const twoWayData = [
        { x: 95, y: 95, label: "A", link: "/artifacts/aichats", icon: "🤖" },
        { x: 40, y: 60, label: "B", link: '/artifacts/privatemessaging', icon: "📧" },
        { x: 0, y: 60, label: "C", link: '/artifacts/letters', icon: "📝" },
        { x: 80, y: 30, label: "D", link: "/artifacts/publicthreads", icon: "💬👥👥" },
        { x: 15, y: 15, label: "E", link: '/artifacts/graffiti', icon: "🗿🖊️" },
      ];

      const anonymousData = [
        { x: 100, y: 55, label: "A", link: "/artifacts/aichats", icon: "🤖" },
        { x: 42, y: 65, label: "B", link: '/artifacts/privatemessaging', icon: "📧" },
        { x: 0, y: 35, label: "C", link: '/artifacts/letters', icon: "📝" },
        { x: 70, y: 65, label: "D", link: "/artifacts/publicthreads", icon: "💬👥👥" },
        { x: 15, y: 50, label: "E", link: '/artifacts/graffiti', icon: "🗿🖊️" },
      ];

      const personalityData = [
        { x: 100, y: 30, label: "A", link: "/artifacts/aichats", icon: "🤖" },
        { x: 40, y: 70, label: "B", link: '/artifacts/privatemessaging', icon: "📧" },
        { x: 0, y: 25, label: "C", link: '/artifacts/letters', icon: "📝" },
        { x: 70, y: 70, label: "D", link: "/artifacts/publicthreads", icon: "💬👥👥" },
        { x: 20, y: 45, label: "E", link: '/artifacts/graffiti', icon: "🗿🖊️" },
      ];


    const [title, setTitle] = useState("Personality")
    const [subtitle, setSubtitle] = useState("how much expression in this form of chat")
    const [blurb, setBlurb] = useState("The different dimensions of expression, emotion, and personality that this chat can include.")
    const [data, setData] = useState(personalityData)
    const [yText, setYText] = useState("full-expression")
    const [zeroText, setZeroText] = useState("monotone")
    const xText = "now"        

    

    const handleGraphChange = (graphtype) => {
        switch (graphtype) {
            case GraphTypes.SPEED :
                setTitle("Speed")
                setSubtitle("the instantaneousness of our communication")
                setBlurb("Changes how much time it takes to reach us & how long we can think about the conversation")
                setData(speedData)
                setYText("instant")
                setZeroText("snail mail")
                break;
            case GraphTypes.ANONYMITY :
                setTitle("Anonymity")
                setSubtitle("how anonymous you can be in this form of chat")
                setBlurb("The dynamics of sending/receiving and the possibility of excluding the senders information.")
                setData(anonymousData)
                setYText("anonymous")
                setZeroText("not")
                break;       
            case GraphTypes.TWOWAY :
                setTitle("Two-Way")
                setSubtitle("how much the chat elicits a response")
                setBlurb("The direct chat to a person elicits more of a response, for example. A public general chat - less.")
                setData(twoWayData)
                setYText("two-way")
                setZeroText("one-sided")
                break;
            case GraphTypes.PERSONALITY :
                setTitle("Personality")
                setSubtitle("how much expression in this form of chat")
                setBlurb("The different dimensions of expression, emotion, and personality that this chat can include.")
                setData(personalityData)
                setYText("full-expression")
                setZeroText("monotone")
                break;
            default:
                setTitle("Personality")
                setSubtitle("how much expression in this form of chat")
                setBlurb("The different dimensions of expression, emotion, and personality that this chat can include.")
                setData(personalityData)
                setYText("full-expression")
                setZeroText("monotone")
                break;
        }
    }


    return (
        <div className={styles.ComparePage}>
        <Navbar currentPage={"/compare"}/>
        <div className={styles.CompareTitleDiv}>
        <h1>Compare over time 📈:</h1>
        </div>
        <div className={styles.compareButtonDiv}>
            <CompareButton emoji={"⚡️"} text={"speed"} onClick={() => handleGraphChange(GraphTypes.SPEED)}/>
            <CompareButton emoji={"🥸"} text={"anonymity"} onClick={() => handleGraphChange(GraphTypes.ANONYMITY)}/>
            <CompareButton emoji={"🏓"} text={"two-way"} onClick={() => handleGraphChange(GraphTypes.TWOWAY)}/>
            <CompareButton emoji={"🎭"} text={"personality"} onClick={() => handleGraphChange(GraphTypes.PERSONALITY)}/>
        </div>
       
        
        <Graph title={title} subtitle={subtitle} blurb={blurb} data={data} xText={xText} yText={yText} zeroText={zeroText}/>
        </div>
    )
}