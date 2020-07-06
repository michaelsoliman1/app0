import React from 'react';
import { Login } from './components/registeration/login'
import { Signup } from './components/registeration/signup'
import { Home } from './components/home/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/home" exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
