import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Messenger from './components/messenger/Messenger';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Group from './components/intermidiar/Group';
import Snackbar from './components/snackbar/Snackbar';
import Global from './components/global/Global';
import { withTranslation } from 'react-i18next';
import i18n from './i18n';
import './App.css';
import {Flag} from 'semantic-ui-react';
import Profile from './profile/Profile';

class App extends Component {

  snackbarRef = React.createRef();

  onDisplaySnackBar = (message) => {
    this.snackbarRef.current.openSnackBar(message);
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  render() {
    const {t} = this.props;
    return (
      <div className='AppHeder'>
        <div className='languageButton'>
          <button className='buttonL' onClick={() => this.changeLanguage('fr')}><Flag name='france' /></button>
          <button className='buttonL' onClick={() => this.changeLanguage('en')}><Flag name='uk' /></button>
        </div>
        <h1 className='elegantshadow'>{t('app_title')}</h1>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/messenger' component={Messenger} />
              <Route exact path='/signup' component={(props) => <Signup {...props} onDisplaySnackBar={this.onDisplaySnackBar}/>}></Route>
              <Route exact path='/group' component={Group}/>
              <Route exact path='/profile' component={Profile}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/global' component={Global} />
              <Redirect from='/' to='/login' />
            </Switch>
          </Suspense>
        </Router>
        <Snackbar ref={this.snackbarRef}/>
      </div>
    )
  }
}

export default withTranslation()(App);