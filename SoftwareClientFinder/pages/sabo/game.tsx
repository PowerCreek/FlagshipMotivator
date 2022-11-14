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

export default function Game() {

    return (
        <Layout>
            <div></div>
        </Layout>
    )
}

