import InfoTitle from "../../components/InfoTitle"
import ImageLeftTextRight from "../../components/ImageLeftTextRight"    
import ImageRightTextLeft from "../../components/ImageRightTextLeft"
import AboutText from "../../components/AboutText"

import PrivateImage1 from '../../assets/images/privateimage1.png'
import PrivateImage2 from '../../assets/images/privateimage2.png'
import PrivateImage3 from '../../assets/images/privateimage3.png'
import PrivateImage4 from '../../assets/images/privateimage4.png'

export default function PrivateMessaging(){
    return (
        <div>
            <InfoTitle title={"Private Online Messaging"} backLink={'/compare'}/>
            <AboutText text={"Internet means new levels of speed, at this point we are now able to choose one or several participants. The first version of the online chat was “Talkomatic” developed by two PLATO programmers at University of Illinois in 1973. You could host up to 5 people, where participants type live word for word in an open-text document - actually the equivalent to collaborating on google docs today. "}   />
            <ImageRightTextLeft text={"At at the same time we somehow are still using letter technology, we’ve just made it digital! Welcome to the email (developing around the same time as Talkomatic). "} image={PrivateImage1}/>
            <AboutText text={"The email stayed for these formal information exchanges / chats. If you were to make emails shorter and shorter, that becomes SMS (short message service). "}/>
            <ImageLeftTextRight text={"AOL messenger (AIM) and Microsoft's MSN were the ones to capitalize on this opportunity for the more informal chat-appropriate instant message inclusive of friends and family, gaining huge popularity just before the 2000s. "} image={PrivateImage2}/>
            <AboutText text={"Notably, AIM had features like the “online” status - which would reappear in later social medium platforms as well. Along with, comes social impacts."}  />
            <ImageRightTextLeft text={"Then comes iMessage, the monopoly of the SMS. In texting we start using pictograms again like we did in the first version of written chat technology; emoji, bitmoji, memoji. "} image={PrivateImage3}/>
            <AboutText text={"Have you ever recognized how texts appear?  We we adopted speech bubble iconography from illustrations depicting conversations like comics - those words floating above heads in bubbles. "}/>
            <ImageLeftTextRight text={"Many platforms now, social media especially, have their own flavor, and unique features and sometimes specific uses. Even ones strictly for the work place like slack."} image={PrivateImage4}/>
            <AboutText text={"These two platforms incorporate optional functions like “read receipts” or “opened” notifications, not to mention “snap-maps”, the map showing user location when they are online, which also have huge social-impacts on relationships."}/>
        </div>
    )
}