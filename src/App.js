import './App.css';
import Gamemode from './component/Gamemode'
import Scoreboard from './component/Scoreboard';
import Gameboard from './component/Gameboard';
import ObjectList from './component/ObjectList';

const App = () => {
  return (
    <div className="top-container">
      <Gamemode/>
      <Scoreboard/>
      <Gameboard/>
      <ObjectList/>
    </div>
  )
}

export default App;
