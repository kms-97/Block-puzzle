import React, { useContext } from 'react';
import GameDataContext from "./context/GameData"
import ModeButton from './ModeButton';
import './Gamemode.css';

const Gamemode = () => {
    const GameData = useContext(GameDataContext)
    const modeList = [5, 7, 9]

    const modeChange = (e) => {
        GameData.actions.setGamemode(Number(e.target.value))
    }

    const modeButton = modeList.map((mode) => {
        return(
            (mode === GameData.state.gamemode) ?
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