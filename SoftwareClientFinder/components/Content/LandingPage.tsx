import { MapMarkdownContent, MarkupData } from "../Functional/MarkdownContent.tsx/MarkdownService"
import styles from "./LandingPage.module.css"


//TODO change this to pull the site data.
//probably use redis to cache the content so we don't pull it from a resource that sits on the server so often.
function GetTextContent(): MarkupData[][] {
    return [[
        {
            tag: 'bigLabel',
            text: 'Welcome to the'
        },
        {
            tag: 'bigLabel2',
            text: 'Streamer Asset Platform!'
        },
    ]]
}

export default function LandingPageContent(){

    var content = MapMarkdownContent(GetTextContent())
    return (
        <div className={styles.landingPageContentContainer}>{
            <div className={styles.landingPageContent}>{
                content.map((e,i) => e(i))
            }</div>
        }</div>)
}
