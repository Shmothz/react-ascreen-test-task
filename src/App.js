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
      <Preview />
      <Switch>
        <Route path='Лявочорр' render={() => <LavoMountain />}/>
        <Route path='Часначорр' render={() => <ChasnaMountain />} />
        <Route path='Кукисвумчорр' render={() => <KukiMountain />} />
        <Route path='Ферсмана' render={() => <FersMountain />} />
        <Route path='Юдычвумчорр' render={() => <UdichMountain />} />
        <Route path='Тахтарвумчорр' render={() => <TahtarMountain />} />
        <Route path='Вудъяврчорр' render={() => <WoodMountain />} />
        <Route path='Айкуайвенчорр' render={() => <AikyMountain />} />
      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
