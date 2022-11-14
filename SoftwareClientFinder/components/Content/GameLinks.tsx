import { GetRoutes } from "../../drivers/PageRoutes"

import styles from "./GameLinks.module.css"

interface GameLinkData{
    Link: string,
    Text: string
}

export function GameLinks():GameLinkData[]{
    var SaboGameLinkData = {Link: '/sabo/game', Text: "Play Sabo"}

    return [
        SaboGameLinkData,
    ]
}

export function GamePage(){
    const route = GetRoutes()

    var displayGameLinks = GameLinks().map((e, index)=>(
        <div 
            key={index} 
            className = {styles.contentItems}
            onClick={()=>{
            route.toSaboGame(e.Link)
            }}
        >{e.Text}</div>)
      )

    return (
        <div className={styles.content}>
            <div className={styles.titleItem}>Play These Games!</div>
            {displayGameLinks}    
        </div>
    )
}