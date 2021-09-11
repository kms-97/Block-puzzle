import React, { useState, createContext } from "react";

const GameDataContext = createContext({
    state: {
        gamemode : 7,
    },
    actions : {
        setGamemode: () => {}
    }
})

const GameDataProvider = ({ children }) => {
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
        <GameDataContext.Provider value={context}>
            { children }
        </GameDataContext.Provider>
    ) 
}

const { Consumer: GameDataConsumer } = GameDataContext

export { GameDataProvider, GameDataConsumer }

export default GameDataContext