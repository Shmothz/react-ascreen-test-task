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
import NotFound from './components/NotFound/NotFound';

function App() {
  return <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Preview />} />
        <Route exact path='/lavo' render={() => <LavoMountain />}/>
        <Route exact path='/chasna' render={() => <ChasnaMountain />} />
        <Route exact path='/kuki' render={() => <KukiMountain />} />
        <Route exact path='/fers' render={() => <FersMountain />} />
        <Route exact path='/udich' render={() => <UdichMountain />} />
        <Route exact path='/tahtar' render={() => <TahtarMountain />} />
        <Route exact path='/wood' render={() => <WoodMountain />} />
        <Route exact path='/aiky' render={() => <AikyMountain />} />
        <Route path='/' render={() => <NotFound />}/>
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
