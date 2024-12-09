import InfoTitle from "../../components/InfoTitle"
import ImageLeftTextRight from "../../components/ImageLeftTextRight"    
import ImageRightTextLeft from "../../components/ImageRightTextLeft"
import AboutText from "../../components/AboutText"

import letterImage1 from '../../assets/images/letterimage1.png'
import letterImage2 from '../../assets/images/letterimage2.png'
import letterImage3 from '../../assets/images/letterimage3.png'

export default function Letters(){
    return (
        <div>
            <InfoTitle title={"Letters & Notes"} backLink={'/compare'}/>
            <ImageRightTextLeft text={"The invention of written language evolved from spoken language and shorthand pictograms."} image={letterImage1}/>
            <AboutText text={`Cave man grunts and drawings on cave walls eventually elicited early language like hieroglyphs, and oracle bone script (archaic Chinese). And then, we figured out to make them transportable.`}/>
            <AboutText text={"Transported communication service was mostly, at first, for upper class, royalty or military executives."}/>
            <ImageRightTextLeft text={"Over 3,800 year ago in Mesopotamia, a Karen was introduced to ancient chat technology - complaining here about receiving the wrong copper from a merchant and their behavior - passing on this inscribed tablet (an early version of leaving a raging customer review chat)."} image={letterImage2}/>
            <AboutText text={"These were the first forms of written short hand conversations on transportable physical objects. "}/>
            <ImageLeftTextRight text={"The invention of written language evolved from spoken language and shorthand pictograms."} image={letterImage3}/>
            <AboutText text={"The first facilitators of written notes were carriers - just like the post through modern day, a series of linked human transporters. "}/>
            <AboutText text={"There was also non-human transporters like the pigeon-post used from 3000 years ago, and even through WWII. In fact, many of these advances in technology were further by military adoptions and innovations."}/>
            <AboutText text={"Other transportation technology was of course incorporated through time which sped this up (such as horses, rails, cars and then planes)."}/>
        </div>
    )
}