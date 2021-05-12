import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LavoMountain from './components/LavoMoutain/LavoMountain';
import ChasnaMountain from './components/ChasnaMoutain/ChasnaMountain';
import FersMountain from './components/FersMountain/FersMountain';
import KukiMountain from './components/KukiMountain/KukiMountain';
import UdichMountain from './components/UdichMountain/UdichMountain';
import TahtarMountain from './components/TahtarMountain/TahtarMountain';
import WoodMountain from './components/WoodMountain/WoodMountain';
import AikyMountain from './components/AikyMountain/AikyMountain';
import Preview from './components/Preview/Preview';

function App() {
  return <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Preview />} />
        <Route path='/lavo' render={() => <LavoMountain />}/>
        <Route path='/chasna' render={() => <ChasnaMountain />} />
        <Route path='/kuki' render={() => <KukiMountain />} />
        <Route path='/fers' render={() => <FersMountain />} />
        <Route path='/udich' render={() => <UdichMountain />} />
        <Route path='/tahtar' render={() => <TahtarMountain />} />
        <Route path='/wood' render={() => <WoodMountain />} />
        <Route path='/aiky' render={() => <AikyMountain />} />
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
