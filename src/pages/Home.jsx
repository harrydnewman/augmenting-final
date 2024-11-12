import ChatBubble from "../components/ChatBubble";
import styles from '../styles/Home.module.css';
import LoadingBubble from "../components/LoadingBubble";
import EnterButton from "../components/EnterButton";
import { useEffect, useState } from 'react';

export default function Home() {
    const [shownComponents, setShownComponents] = useState(1);
    const [visible, setVisible] = useState(false)

    const components = [
        <LoadingBubble key="loading1" duration={1000} />,
        <ChatBubble key="chat1" text={"Hi..."} />,
        <LoadingBubble key="loading2" duration={4000} />,
        <ChatBubble key="chat2" text={"Welcome to the history of chat technologies"} />
    ];

    useEffect(() => {
        // First timeout to show 2 components after 1 second
        const timer1 = setTimeout(() => {
            setShownComponents(2);
        }, 1000);

        // Second timeout to show 3 components after 3 seconds
        const timer2 = setTimeout(() => {
            setShownComponents(3);
        }, 1500);

        // Third timeout to show all 4 components after 5 seconds
        const timer3 = setTimeout(() => {
            setShownComponents(4);
        }, 5500);

        const timer4 = setTimeout(() => {
            setVisible(true)
        }, 7000);

        // Clear timeouts if the component unmounts
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4)
        };
    }, []); // Empty dependency array to run only on initial render

    return visible ?
        (
            <div className={styles.chatDiv}>
                <div className={styles.grayChatDiv}>
                    {components.slice(0, shownComponents).map((component, index) => (
                        <div key={index}>{component}</div>
                    ))}
                </div>
                <div className={styles.nextButtonDiv}>
                    <EnterButton />
                </div>
            </div>
        ) : (
            <div className={styles.chatDiv}>
                <div className={styles.grayChatDiv}>
                    {components.slice(0, shownComponents).map((component, index) => (
                        <div key={index}>{component}</div>
                    ))}
                </div>
            </div>

        )
}
