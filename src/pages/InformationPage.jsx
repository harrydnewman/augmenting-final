// probably will need to come back and change the way this entire thing works, might be easier to just make a DB


// THIS IS A MOCK PAGE
import ShoutImage from '../assets/images/shoutemoji.png'
import ImageRightTextLeft from '../components/ImageRightTextLeft'
import styles from '../styles/Information.module.css'
export default function InformationPage(){
    return (
        <div>
            <div className={styles.informationTitle}>
                <h1>Spoken language: The face-to-face</h1>
            </div>
            <ImageRightTextLeft text={"Yes, oral language is a technology for chatting. The earliest record of spoken language - that is what is evolved from grunts."} image={ShoutImage} />
        </div>
    )
}