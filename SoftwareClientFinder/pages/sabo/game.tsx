import { ReactElement, useState } from "react"
import Layout from "../../components/layout"
import styles from "./game.module.css"

function GameScreen(){
    var [category, setCategory] = useState("test") 
    return (
        <div className={styles.screen}>
            <div className={styles.categoryContainer}>
                {category}
            </div>
                <div style={{borderBottom: '1px solid gray'}}></div>
                <div className={styles.contentContainer}>
            </div>
        </div>
    )
}

//show games roster
//show games which the user is a part of
//show states of the games
//  IE: Picking vs Voting
//  and whos turn it is to pick an answer

//clicking on a roster will bring the user to the game screen

//create new game
//filter games (later)

enum SaboGameState{
    LOBBY,
    NEW_GAME,
    OTHER,
}

interface SubStateValue{
    StateCallback: Function
}

export default function Game() {
    const [gameState, setGameState] = useState(SaboGameState.LOBBY);

    var result;

    switch(gameState){
        case SaboGameState.LOBBY: 
            result = DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
        case SaboGameState.OTHER: 
            result = <div>other</div>//DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
        case SaboGameState.NEW_GAME: 
            result = <div>new game</div>//DoGamesList({StateCallback: ()=>{setGameState(SaboGameState.NEW_GAME)}})
        break;
    }

    return (
        <Layout>
            <div>{result}</div>
        </Layout>
    )
}

interface GameListData{
    id: number,
    content: string,
    gameState: string,//guessing/voting/win state
    turn: string
}

var GetJoinOrResultButton = [
    (<div className={[styles.gameListItem, styles.gameListItemAction].join(' ')}>{'Join'}</div>),
    (<div className={[styles.gameListItem, styles.gameListItemAction].join(' ')}>{'Defeat'}</div>),
    (<div className={[styles.gameListItem, styles.gameListItemAction].join(' ')}>{'Victory'}</div>),
    (<div className={[styles.gameListItem, styles.gameListItemAction].join(' ')}>{'Victory'}</div>)
]

function GenerateGameListItem({id, content, gameState, turn}: GameListData){

    var turnOrNothing = id%3 != 0? '- / -':turn;

    return (
        <div key={id} className={styles.gameListRow}>
        <div className={styles.gameListItem}>{gameState}</div>
            <div className={styles.gameListItem}>{turnOrNothing}</div>
            {GetJoinOrResultButton[id%3]}
        </div>
    )
}

function DoGamesList(input: SubStateValue){
    var listOfGames = [1,2,3,4,5].map((e,i) => GenerateGameListItem({id:i, content:`${e}`, gameState: "guessing", turn: '3/5'}))

    var onNewGameClick = ()=> input.StateCallback();

    return (
        <div className={styles.gameListGrid}>
            <div 
                className={styles.newGameButton}
                onClick={onNewGameClick}
                >{
                    'CreateNewGame'
                }</div>
            {listOfGames}
        </div>
    )
}

function GetGamesList(){

}

function CreateNewGame(){

}

function EnterGameInstance(){

}
