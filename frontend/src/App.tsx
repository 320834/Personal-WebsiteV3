import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from './component/Home';
import CanvasBackground from './component/CanvasBackground';

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
            <Route path ='/untitled-project' render={()=> (<div>Hey</div>)}/>
            <Route path ='/test' render={()=>(<CanvasBackground></CanvasBackground>)}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
