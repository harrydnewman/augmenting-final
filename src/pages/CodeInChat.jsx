import ChatPersonalityBubble from "../components/ChatPersonalityBubble"


import TextBubble1 from '../assets/images/textbubbles/textbubble1.png'
import TextBubble2 from '../assets/images/textbubbles/textbubble2.png'
import TextBubble3 from '../assets/images/textbubbles/textbubble3.png'
import TextBubble4 from '../assets/images/textbubbles/textbubble4.png'
import TextBubble5 from '../assets/images/textbubbles/textbubble5.png'
import TextBubble6 from '../assets/images/textbubbles/textbubble6.png'
import TextBubble7 from '../assets/images/textbubbles/textbubble7.png'
import TextBubble8 from '../assets/images/textbubbles/textbubble8.png'

import styles from '../styles/CodeInChat.module.css'

export default function CodeInChat(){
    return (
        <div>
            <h1>Code in Chat</h1>

            <h3 className={styles.sectionHeader}>What chat personality are you?</h3>

            <ChatPersonalityBubble text={"The Formal One:"} image={TextBubble1} gray={false}/>
            <ChatPersonalityBubble text={"The Non-Ironic Emoji-Using Middle-aged Mom:"} image={TextBubble2} gray={true}/>
            <ChatPersonalityBubble text={"The Dry Texter:"} image={TextBubble3} gray={false}/>
            <ChatPersonalityBubble text={"The Chat Stream Rager:"} image={TextBubble4} gray={true}/>
            <ChatPersonalityBubble text={"Gen Z:"} image={TextBubble5} gray={false}/>
            <ChatPersonalityBubble text={""} image={TextBubble6} gray={false}/>
            <ChatPersonalityBubble text={"Sparkles:"} image={TextBubble7} gray={true}/>
            <ChatPersonalityBubble text={"Short & Sweet:"} image={TextBubble8} gray={false}/>
        </div>
    )
}