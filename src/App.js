import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Messenger from './components/messenger/Messenger';
import Login from './components/login/Login';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='AppHeder'>
        <h1 className='elegantshadow'>Read my messages</h1>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/messenger" component={Messenger} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    )
  }
}

export default App;