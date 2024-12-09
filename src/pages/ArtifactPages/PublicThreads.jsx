import InfoTitle from "../../components/InfoTitle"
import ImageLeftTextRight from "../../components/ImageLeftTextRight"    
import ImageRightTextLeft from "../../components/ImageRightTextLeft"
import AboutText from "../../components/AboutText"

import PublicForumImage1 from '../../assets/images/publicforumimage1.png'
import PublicForumImage2 from '../../assets/images/publicforumimage2.png'
import PublicForumImage3 from '../../assets/images/publicforumimage3.png'

import styles from '../../styles/ArchivePages.module.css'

export default function PublicThreads(){
    return (
        <div className={styles.archivePageDiv}>
             <InfoTitle title={"Online Public Group Threads"} backLink={'/compare'}/>
             <AboutText text={"The public chat forum on the internet where anyone can contribute to a commentary. This chat doesn’t always have a tightly coupled responder. Sometimes, your end of the chat is just yelling into the void. You can also target a single recipient by responding to a user in a thread.  "}/>
             <ImageLeftTextRight text={"For example Reddit made in 2005. A forum for extreme niches and sharing commentary and information on a wide variety. It’s especially known for having typical unfiltered “internet culture” with anonymous users. "} image={PublicForumImage1}/>
             <ImageRightTextLeft text={"Launched in 2006, and similar to Reddit, Twitter boomed and was adopted with its iconic use of “#” (hashtags) which help connect related content."} image={PublicForumImage2}/>
             <AboutText text={"It is especially known for political and controversial discussions."}/>
             <AboutText text={"These chats are well known for hosting memes - a big part of the connotation of the “chat” are communities of collective humor. In this way, these modern day platforms have specified the idea of this community group collective chat as “the chat”. "}/>
             <img style={{paddingBottom: '10px'}} src={PublicForumImage3}/>
        </div>
    )
}