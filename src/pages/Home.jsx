import ChatBubble from "../components/ChatBubble"
import styles from '../styles/Home.module.css'
import LoadingBubble from "../components/LoadingBubble"
import { useEffect, useState } from 'react';

export default function Home(){
    const [visible, setVisible] = useState(false);

    const components = [
        <LoadingBubble key="loading1" duration={1000} />,
        <ChatBubble key="chat1" text={"Hi..."} />,
        <LoadingBubble key="loading2" duration={4000} />,
        <ChatBubble key="chat2" text={"Welcome to the history of chat technologies"} />
    ];
    
    return (
        <div className={styles.chatDiv}>
            <div className={styles.grayChatDiv}>
                {components.slice(0, 3).map((component, index) => (
                    <div key={index}>{component}</div>
                ))}
            </div>
            {/* <div className={styles.nextButtonDiv}>
                <h1>Next</h1>
            </div> */}
        </div>
    );
}