import React, { useContext } from "react";
import GameScoreContext from "./context/GameScore";
import "./Scoreboard.css"

const Scoreboard = () => {
    const gameScore = useContext(GameScoreContext)

    return (
        <div id="score-board" className="alert alert-light rounded-3 border border-primary">
            {gameScore.state.gameScore}
        </div>
    )
}

export default React.memo(Scoreboard)