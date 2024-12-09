import InfoTitle from "../../components/InfoTitle"
import ImageLeftTextRight from "../../components/ImageLeftTextRight"    
import ImageRightTextLeft from "../../components/ImageRightTextLeft"
import AboutText from "../../components/AboutText"

import graffitiimage1 from '../../assets/images/graffiti1.png'
import graffitiimage2 from '../../assets/images/graffiti2.png'
export default function Graffiti(){
    return (
        <div>
           <InfoTitle title={"Chat Graffiti"} backLink={'/compare'}/>
           <ImageLeftTextRight text={"The statue is known as The Pasquino Statue - the first of the talking statues of Rome, a series of statues with attached anonymous criticisms to its base."} image={graffitiimage1}/>
           <AboutText text={"Arguably the first written public chat forum. "}/>
           <AboutText text={"Most forms of chat today are actually “chat graffiti” - leaving a correspondence on an surface, which another chatter might approach and responds to on that same interface. Message streams today mimic this concept - you are just using a digital wall, with more structured ways to respond to each other (especially visually)."}/>
           <ImageRightTextLeft text={"Have you ever seen graffiti chats between strangers in bathrooms? Or other regular spray painted graffiti text? Yup, that’s a modern version of this too."} image={graffitiimage2}/>
           <AboutText text={"And have you ever noticed that many also tend to be politically charged, similar to the Pasquino statue, or be very explicit? Many other public forums, the dynamic of anonymity and non-directness seems to elicit individuals to say whatever they will with no accountability. "}/>

        </div>
    )
}