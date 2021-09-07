import React, { useState } from 'react';
import ModeButton from './ModeButton';
import './Gamemode.css';

const Gamemode = () => {
    const [currentMode, setCurrentMode] = useState(7)
    const modeList = [5, 7, 9]

    const modeChange = (e) => {
        setCurrentMode(Number(e.target.value))
    }

    const modeButton = modeList.map((mode) => {
        return(
            (mode === currentMode) ?
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