import React, { useState, createContext } from "react";

const GameModeContext = createContext({
    state: {
        gamemode : 7
    },
    actions : {
        setGamemode: () => {}
    }
})

const GameModeProvider = ({ children }) => {
    const [gamemode, setGamemode] = useState(7)

    const context = {
        state : {
            gamemode
        },
        actions : {
            setGamemode
        }
    }

    return (
        <GameModeContext.Provider value={context}>
            { children }
        </GameModeContext.Provider>
    ) 
}

const { Consumer: GameModeConsumer } = GameModeContext

export { GameModeProvider, GameModeConsumer }

export default GameModeContext