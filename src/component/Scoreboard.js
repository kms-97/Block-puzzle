import React, { useState } from "react";
import "./Scoreboard.css"

const Scoreboard = () => {
    const [score, setScore] = useState(0)

    return (
        <div id="score-board" className="alert alert-light rounded-3 border border-primary">
            { score }
        </div>
    )
}

export default React.memo(Scoreboard)