import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from './component/Home';
import CanvasBackground from './component/CanvasBackground';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

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
{/* https://fonts.google.com/specimen/Arvo?sidebar.open=true&selection.family=Arvo:ital,wght@0,400;0,700;1,400;1,700 */}
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <Router>
          <Switch>
            <Route exact path ='/' render={() => (<Home></Home>)}/>
            <Route path ='/d3-force' render={() =>(<CanvasBackground></CanvasBackground>)}/>
            <Route path ='/about' render={() =>(<About/>)}/>
            <Route path ='/contact' render={() =>(<Contact/>)}/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;
