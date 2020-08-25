import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from './component/Home';
import CanvasBackground from './component/CanvasBackground';
import UnityGame from './component/UnityGame';

import './App.css';

type AppState = {

}

type AppProps = {

}

export class App extends Component<AppProps, AppState>{

  constructor(props : AppProps)
  {
    super(props);
  }

  render()
  {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path ='/' render={()=> (<Home></Home>)}/>
            <Route path ='/untitled-project' render={()=> (<UnityGame></UnityGame>)}/>
            <Route path ='/d3-force' render={()=>(<CanvasBackground></CanvasBackground>)}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
