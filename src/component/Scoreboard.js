import React, { useContext } from "react";
import GameDataContext from "./context/GameData"
import "./Scoreboard.css"

const Scoreboard = () => {
    const GameData = useContext(GameDataContext)

    return (
        <div id="score-board" className="alert alert-light rounded-3 border border-primary">
            { GameData.state.score }
        </div>
    )
}

export default React.memo(Scoreboard)