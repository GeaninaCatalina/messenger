import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Messenger from './components/messenger/Messenger';
import Login from './components/login/Login';
import './App.css'
import Signup from './components/Signup/Signup';
import Snackbar from './components/Signup/Snackbar';

class App extends Component {

  snackbarRef = React.createRef();

  onDisplaySnackBar = (message) => {
    this.snackbarRef.current.openSnackBar(message);
  }

  render() {
    return (
      <div className='AppHeder'>
        <h1 className='elegantshadow'>Read my messages</h1>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/signup' component={(props) => <Signup {...props} onDisplaySnackBar={this.onDisplaySnackBar}/>}></Route>
              <Route exact path='/login' component={Login} />
              <Redirect from='/' to='/login' />
              <Route exact path='/messenger' component={Messenger} />
            </Switch>
          </Suspense>
        </Router>
        <Snackbar ref={this.snackbarRef}/>
      </div>
    )
  }
}

export default App;