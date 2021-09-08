import React, { useContext } from "react";
import GameDataContext from "./context/GameData"
import "./Gameboard.css"

const Gameboard = () => {
    const GameData = useContext(GameDataContext)

    const makeBlankArray = (size) => {
        const blankArray = []
        for (let i = 0; i < size; i++) {
            blankArray.push([])
            for (let j = 0; j < size; j++) {
                blankArray[i].push(j)
            }
        }
        return blankArray
    }

    return (
        <div className="top-gameboard-container">
            {
                makeBlankArray(GameData.state.gamemode).map((horizon, index) => {
                    return(
                        <Horizonboard horizon={horizon} line={index} key={"h" + index}/>
                    )
                })
            }
        </div>
    )
}

export default Gameboard

const Horizonboard = ({horizon, line}) => {

    return (
        <div className="horizon-gameboard">
            {
                horizon.map((order) => {
                    return(
                        <Eachboard order={order} line={line} key={line + String(order)}/>
                    )
                })
            }
        </div>
    )
}

const Eachboard = ({order, line}) => {

    return (
        <div className="square" id={line + String(order)}>
        </div>
    )
}
