import React, { useContext } from 'react';
import GameModeContext from "./context/GameMode"
import GameScoreContext from "./context/GameScore"
import ModeButton from './ModeButton';
import './Gamemode.css';

const Gamemode = () => {
    const GameMode = useContext(GameModeContext)
    const GameScore = useContext(GameScoreContext)
    const modeList = [5, 7, 9]

    const modeChange = (e) => {
        GameMode.actions.setGamemode(Number(e.target.value))
        GameScore.actions.setGameScore(0)
    }

    const modeButton = modeList.map((mode) => {
        return(
            (mode === GameMode.state.gamemode) ?
            <ModeButton key={mode.toString()} mode={mode} isActive={true} onClick={modeChange}/>
            :<ModeButton key={mode.toString()} mode={mode} isActive={false} onClick={modeChange}/>
        )
    })  

    return (
        <ul>
            { modeButton }
        </ul>
    )
}

export default React.memo(Gamemode)