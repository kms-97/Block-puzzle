import React, { useState, createContext } from "react";

const GameDataContext = createContext({
    state: {
        gamemode : 7,
        score : 0
    },
    actions : {
        setGamemode: () => {},
        setScore: () => {},
    }
})

const GameDataProvider = ({ children }) => {
    const [gamemode, setGamemode] = useState(7)
    const [score, setScore] = useState(0)

    const context = {
        state : {
            gamemode,
            score
        },
        actions : {
            setGamemode,
            setScore
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