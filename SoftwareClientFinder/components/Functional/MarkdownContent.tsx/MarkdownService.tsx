import styles from './MarkdownContent.module.css'

export interface MarkupData{
    tag: string,
    text: string
}

const MarkupTags = {
    bigLabel: (e:string)=> <h1>{e}</h1>,
    bigLabel2: (e:string)=> <div className={styles.sloganText}>{e}</div>,
}

function GetComponentFromMarkup(data: MarkupData):JSX.Element{
    return MarkupTags[data.tag as keyof typeof MarkupTags](data.text);
}

export function MapMarkdownContent(markup: MarkupData[][]){
    return markup.map(arr => 
        (key: number)=>
        <div key ={key}>
            {arr.map(((e,i)=>
                <div key={i}>{GetComponentFromMarkup(e)}</div>
            ))}
        </div>
    )
}