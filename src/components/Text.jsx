import Paragraph from "../components/Paragraph"
import styles from "./Components.module.css";

const paragraph = `
In Chronicle everything is made with Blocks that come with pixel perfect design,
interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library 
of blocks and see the magic unfold.
`;


export default function Text(){
    return(
        <main>
            <div style={{height:"20vh"}}></div>
            <Paragraph value={paragraph}/>
            <div style={{height:"20vh"}}></div>
        </main>
    )
}