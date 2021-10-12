import { useContext } from 'react'
import ReactDOM from 'react-dom'
import GameModeContext from './context/GameMode'
import GameScoreContext from './context/GameScore'
import './GameoverModal.css'

const GameoverModal = () => {
    const gameMode = useContext(GameModeContext)
    const gameScore = useContext(GameScoreContext)
    const link = document.getElementById('game-over')

    const reStart = () => {
        gameMode.actions.setGamemode(new Number(gameMode.state.gamemode))
        gameScore.actions.setGameScore(0)
        
        link.style.display = 'none'
    }

    return ReactDOM.createPortal(
    <div className="modal">
        <div className="content">
            <h1>Score : {gameScore.state.gameScore}</h1>
            <h3>Game Over</h3>
            <div>더 이상 놓을 수 있는 블럭이 없습니다.</div>
            <button className="btn btn-primary" onClick={reStart}>재시작</button>
        </div>
    </div>
        , link)
}

export default GameoverModal