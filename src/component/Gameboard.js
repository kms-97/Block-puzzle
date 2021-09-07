import React, {useEffect, useState} from "react";
import "./Gameboard.css"

const Gameboard = () => {
    const [gamemode, setGamemode] = useState([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]])

    return (
        <div className="top-gameboard-container">
            {
                gamemode.map((horizon, index) => {
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
