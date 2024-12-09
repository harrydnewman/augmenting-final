import styles from '../styles/NewHomePage.module.css'

import OutgoingBubble from '../components/NewHomePage/OutgoingBubble'
import IncomingBubble from '../components/NewHomePage/IncomingBubble'

export default function HomePageRestart(){
    return (
        <div>
            <h1>Home Page Restart</h1>

            <IncomingBubble text={"Hi!"}/>
            <IncomingBubble text={"..."}/>
            <OutgoingBubble text={"Um.. Who is this?"}/>
            <IncomingBubble text={"Welcome to the history of the written chat!"}/>
            <IncomingBubble text={"^^ A digital exhibition of our evolved mode of chatting via writing and those impacts..."}/>
            <OutgoingBubble text={"chat as in like.. these texts?"}/>
            <IncomingBubble text={"Exactly! Chat - a back and forth conversation."}/>
            <OutgoingBubble text={"gotcha"}/>
            <IncomingBubble text={"Writing as chatting changes the way we ... well... chat! "}/>
            <IncomingBubble text={"What sometimes gets lost in translation? How have we managed to come up with ways to make personality in text?"}/>
            <IncomingBubble text={"And take a dive into the peculiars of “chat personalities”..."}/>
            <OutgoingBubble text={"interesting!"}/>
            <IncomingBubble text={"Lets get to it.. 👉"}/>
            

          

            {/* create incoming chat bubble */}
            {/* create outgoing chat bubble */}
            {/* animate the css */}
            {/* 3  dots chatbubble*/}
            {/* create title and enter button*/}
        </div>
    )
}