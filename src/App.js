import './App.css';
import Gamemode from './component/Gamemode'
import Scoreboard from './component/Scoreboard';
import Gameboard from './component/Gameboard';
import GameoverModal from './component/GameoverModal';
import { GameModeProvider } from './component/context/GameMode';
import { GameScoreProvider } from './component/context/GameScore';

const App = () => {
  return (
    <div className="top-container">
      <GameScoreProvider>
      <GameModeProvider>
          <Gamemode/>
          <Scoreboard/>
          <Gameboard/>
          <GameoverModal/>
      </GameModeProvider>
      </GameScoreProvider>
    </div>  
  )
}

export default App;
