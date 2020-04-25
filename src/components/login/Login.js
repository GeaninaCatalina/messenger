import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: '', 
      password: ''
    }
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  onUserValidation = (user, password) => {
    const { credentials } = this.state;
    credentials.push({ user, password });

    this.setState({ credentials });
  }

  onUserChange = (e) => {
    this.setState({ user: e.target.value });
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  async sendCredentials() {
    const response = await axios.post("http://localhost:4200/login", {
      user: this.state.user,
      password: this.state.password
    });
    if (response.data === true) {
      this.props.history.push('/group');
    } else {
      alert ('Wrong User name or password!')
    }

    console.log(response.data);
  
  }

  render() {
    const {t} = this.props; 
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label={t('login_name')} placeholder={t('login_name')} width='10' onChange={this.onUserChange} />
          <Form.Input fluid label={t('login_password')} placeholder={t('login_password')} width='10' type="password" onChange={this.onPasswordChange}/>
            <Button className='openButton' type='submit' color='yellow' size='big' onClick={() => this.sendCredentials()}>
            {t('login_gotomessenger')}
          </Button>
    <h3>{t('login_message')} <Link to='/signup'>{t('login_signup')}</Link></h3>
        </Form>
      </div>
    )
  }
}

export default withTranslation()(Login);