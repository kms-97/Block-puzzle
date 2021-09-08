import './App.css';
import Gamemode from './component/Gamemode'
import Scoreboard from './component/Scoreboard';
import Gameboard from './component/Gameboard';
import ObjectList from './component/ObjectList';
import { GameDataProvider } from './component/context/GameData';

const App = () => {
  return (
    <div className="top-container">
      <GameDataProvider>
          <Gamemode/>
          <Scoreboard/>
          <Gameboard/>
          <ObjectList/>
      </GameDataProvider>
    </div>  
  )
}

export default App;
