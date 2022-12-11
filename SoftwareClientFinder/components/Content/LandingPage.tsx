import { MapMarkdownContent, MarkupGroup, MarkupData, mkStyles, MakeMarkupGroup } from "../Functional/MarkdownContent.tsx/MarkdownService"
import styles from "./LandingPage.module.css"


//TODO change this to pull the site data.
//probably use redis to cache the content so we don't pull it from a resource that sits on the server so often.
function GetTextContent(): MarkupGroup[] {
    return [
        MakeMarkupGroup('title', [
            {
                tag: 'bigLabel',
                text: 'Welcome to the'
            },
            {
                tag: 'bigLabel2',
                text: 'Streamer Asset Platform!'
            },
        ], 
        [
            mkStyles.boxedGroup, 
            mkStyles.pad_10
        ]),

        MakeMarkupGroup('First_Milestones', [
            'First Milestone: ',
                'this',
                'then',
                'that'
        ].map(e=>({
            tag: 'bigLabel',
            text: e
        })),
        [
            mkStyles.boxedGroup, 
            mkStyles.pad_10,
            mkStyles.mar_10,
        ]),

        MakeMarkupGroup('Second_Milestone', [
            'Second Milestone: ',
                'this',
                'then',
                'that'
        ].map(e=>({
            tag: 'bigLabel',
            text: e
        })))         
    ]
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
