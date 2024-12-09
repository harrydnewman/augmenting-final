import styles from '../styles/About.module.css'
import Navbar from '../components/NavBar'

export default function About() {
    return (
        <div className={styles.AboutPage}>
        <Navbar currentPage={"About"}/>
            <div className={styles.AboutHeader}>
                <h1>Chat 💬</h1>
                <h1>Technology</h1>
            </div>
            <div className={styles.AboutInfo}>
                <p>There are several consistent forms of chat technology we have used over time - that is any aid used for short hand conversation:
                <strong> Oral</strong> (spoken language), physical <strong>bodily expression</strong>,<strong> written</strong> , <strong>visual</strong> iconography.</p>

                <p>Often, we simply remediate these basic forms of chat technology over and over. That means, reproducing <strong>(remediating)</strong> primal forms of chat just in another medium. </p>
                <p>Written chat has several contributing <strong>origins</strong> of use. For example its quite routed in privilege and power - to transport “important communications” by <strong>royalty</strong> or <strong>military</strong> leaders.</p>  
                <strong></strong>
                <p>Through today, some chat technologies denote privilege by necessitating a lot of $$ to buy them.</p>
                <p>Written chat is just an attempt to recreate spoken language. You essentially are putting down those correspondences onto a surface (or interface).</p>
                <p>With written chat, we lose the visualization of your co-chatter (person), their physical expression (bodily and facial), and auditory voice inflections.</p>
                <p>But written chat has also elicited chat interfaces and innovations which allow us to converse in new ways, to express thoughts differently and chat with strangers too.</p>
                <p>Our written chat technology don’t ALWAYS innovate to be net beneficial, or negative.</p>
                <p><strong>We hope this digital exhibition makes you reflect on written chat technology, the different types and respect qualities, how they change your chats, and what the future of chatting might look like.</strong></p>
                <p><strong>Chat on !! 🤘</strong></p>
            </div>
        </div>
    )

}