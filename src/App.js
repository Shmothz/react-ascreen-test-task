import "./App.css";
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import Mountain from './components/Mountain/Mountain';
import Preview from './components/Preview/Preview';
import NotFound from './components/NotFound/NotFound';
import {useStore} from 'effector-react';
import {store} from './effector/effector';

function App() {

  const getMountains = useStore(store)

  return <div style={{maxWidth:'1920px', margin:'0 auto'}}>
    <HashRouter>
      <Switch>
        <Route exact path='/' render={() => <Preview />} />
        <Route exact path='/lavo' render={() => <Mountain mountain={getMountains.lavo} />}/>
        <Route exact path='/chasna' render={() => <Mountain mountain={getMountains.chasna} />} />
        <Route exact path='/kuki' render={() => <Mountain mountain={getMountains.kuki} />} />
        <Route exact path='/fers' render={() => <Mountain mountain={getMountains.fers} />} />
        <Route exact path='/udich' render={() => <Mountain mountain={getMountains.udich} />} />
        <Route exact path='/tahtar' render={() => <Mountain mountain={getMountains.tahtar} />} />
        <Route exact path='/wood' render={() => <Mountain mountain={getMountains.wood} />} />
        <Route exact path='/aiky' render={() => <Mountain mountain={getMountains.aiky} />} />
        <Route path='/' render={() => <NotFound />}/>
      </Switch>
    </HashRouter>
  </div>;
}

export default App;
