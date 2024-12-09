import InfoTitle from "../../components/InfoTitle"
import ImageLeftTextRight from "../../components/ImageLeftTextRight"    
import ImageRightTextLeft from "../../components/ImageRightTextLeft"
import AboutText from "../../components/AboutText"

import styles from '../../styles/ArchivePages.module.css'

import AIChatsImage1 from '../../assets/images/aichatsimage1.png'
import AIChatsImage2 from '../../assets/images/aichatsimage2.png'
import AIChatsImage3 from '../../assets/images/aichatsimage3.png'

export default function AIChats(){
    return (
        <div className={styles.archivePageDiv}>
             <InfoTitle title={"AI Chats"} backLink={'/compare'}/>
             <AboutText text={"A strange and changing form of chat. Now, we chat with artificial intelligence. Often we use it as a servant of sorts. “Rephrase this for me”, “write this letter for me”, “summarize xyz text for me”. "}/>
             <AboutText text={"It’s a chat with our secretary or non-human assistant of sorts. "}/>
             <AboutText text={"But it can be purely conversational too. We can also program chatbots to have personalities or personas now too. For example, the very first AI chatbot was named ELIZA, developed at MIT, and mimicked a psychotherapist. "}/>
             <img src={AIChatsImage1}/>
             <AboutText text={"Now we have ChatGPT - a highly complex agent which training goes deep in most of any query you throw at it, not to mention self-customizable “voice”."}/>
             <img src={AIChatsImage2}/>
             <AboutText text={"It’s human-like expression can be somewhat believable, it even uses emojis, but you do have to ask exactly what you’re looking for, and can feel non-authentic and like a children’s storybook answer. "}/>
             <AboutText text={"Notably, AI chatbots are usually devoid of any digital avatar to represent itself."}/>
             <ImageRightTextLeft text={"There’s also specific chatbots that are made for certain persona uses (like therapy). "} image={AIChatsImage3}/>
             <AboutText text={"Chatbots are the center of controversy in modern day - questioning of AI free-labor, artificial vs human chatting, misinformation, responsibility, machine mistakes and hallucinations."}/>
        </div>
    )
}