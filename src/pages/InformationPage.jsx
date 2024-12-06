// probably will need to come back and change the way this entire thing works, might be easier to just make a DB


// THIS IS A MOCK PAGE
import InfoTitle from '../components/InfoTitle'
import ShoutImage from '../assets/images/shoutemoji.png'
import ImageRightTextLeft from '../components/ImageRightTextLeft'
import ImageLeftTextRight from '../components/ImageLeftTextRight'
import AboutText from '../components/AboutText'
import styles from '../styles/Information.module.css'

export default function InformationPage(){
    return (
        <div>
            <InfoTitle title={"Spoken language: The face-to-face"} backLink={'/'}/>
            <ImageRightTextLeft text={"Yes, oral language is a technology for chatting. The earliest record of spoken language - that is what is evolved from grunts."} image={ShoutImage} />
            <ImageLeftTextRight text={"Yes, oral language is a technology for chatting. The earliest record of spoken language - that is what is evolved from grunts."} image={ShoutImage} />
            <AboutText text={"Yes, oral language is a technology for chatting. The earliest record of spoken language - that is what is evolved from grunts."}/>
        </div>
    )
}