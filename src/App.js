import './App.css';
import Gamemode from './component/Gamemode'
import Scoreboard from './component/Scoreboard';
import Gameboard from './component/Gameboard';
import { GameDataProvider } from './component/context/GameData';

const App = () => {
  return (
    <div className="top-container">
      <GameDataProvider>
          <Gamemode/>
          <Scoreboard/>
          <Gameboard/>
      </GameDataProvider>
    </div>  
  )
}

export default App;
