import React, { useState, createContext } from "react";

const GameDataContext = createContext({
    state: {
        gamemode : 7,
        boardLocation: {
            x : null,
            y : null
        }
    },
    actions : {
        setGamemode: () => {},
        setBoardLocation: () => {}
    }
})

const GameDataProvider = ({ children }) => {
    const [gamemode, setGamemode] = useState(7)
    const [boardLocation, setBoardLocation] = useState({x:null, y:null})

    const context = {
        state : {
            gamemode,
            boardLocation
        },
        actions : {
            setGamemode,
            setBoardLocation
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