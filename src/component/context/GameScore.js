import React, { useState, createContext } from "react";

const GameScoreContext = createContext({
    state: {
        gameScore : 0
    },
    actions : {
        setGameScore: () => {}
    }
})

const GameScoreProvider = ({ children }) => {
    const [gameScore, setGameScore] = useState(0)

    const context = {
        state : {
            gameScore
        },
        actions : {
            setGameScore
        }
    }

    return (
        <GameScoreContext.Provider value={context}>
            { children }
        </GameScoreContext.Provider>
    ) 
}

const { Consumer: GameScoreConsumer } = GameScoreContext

export { GameScoreProvider, GameScoreConsumer }

export default GameScoreContext