import styles from '../styles/Future.module.css'

import FutureImage1 from '../assets/images/future1.png'
import FutureImage2 from '../assets/images/future2.png'
import FutureImage3 from '../assets/images/future3.png'
import ImageRightTextLeft from '../components/ImageRightTextLeft'

export default function Future(){
    return (
        <div className={styles.futureDiv}>
            <h2 className={styles.title}><i>The Future of Chatting</i></h2>
            <p>To try and predict the future, based on looking on the past evolution of the chat: </p>
            <p>Continuing adopting AI chatbots for various more <u>specific</u> uses.</p>
            <p>The Metaverse: in immersive spaces there will be a chat upheld, along with more representative digital avatars - this links back to the Pasquino statue the “talking statues”, and to bitmojis and profile pictures in online messaging. </p>
            <ImageRightTextLeft text={"We like to attribute speaking to a persona or “putting a face to it” if you will. Perhaps even our AI’s. "} image={FutureImage1}/>
            <p>Physical Metaverse spaces for chats too - bringing the chat into VR & AR spaces - think AR post-its. We love physical things and surfaces for a chat to live. Perhaps especially in the context of a future digital workspace. </p>
            <img src={FutureImage2}/>
            <p>Continued personalization and interactive features - all of these fancy iPhone features like fireworks, “slam”, and invisible ink that allow us interact with each others chats in new expressive ways. </p>
            <img src={FutureImage3}/>
            <p>Perhaps the next will be “squashing” or “flicking” away your friends text, and perhaps in a AR interface!</p>
            <p>And maybe we will have devices like the Apple Vision Pro that allow capture us “air drawing”, and we will go back to writing letters and notes.</p>
        </div>
    )
}