import React, { Component } from 'react';
import './Signup.css';
import { Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      confirmed: ''
    }
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  async sendCredentials() { 
      const id = 0; 
      const response = await axios.post('http://localhost:4200/signup', {
        user: this.state.user,
        password: this.state.password, 
        id: id+1
      }).catch(function(error) {
        alert(error.response.data)
        console.log(error.response);
      });
      if (response) {
        this.props.onDisplaySnackBar('Your account was created. You can now login!');
        // 
        this.props.history.push('/login');
      }
  }

  onUserChange = (e) => {
    this.setState({user: e.target.value}); 
  }

  onPasswordChange = (e) => {
    this.setState({password: e.target.value}); 
  }

  onPasswordConfirmation = (e) => {
    this.setState({confirmed: e.target.value}); 
  }

  formIsValid = () => {
    return this.state.password !== '' && 
    this.state.password === this.state.confirmed && 
    this.state.user !== '';
  }

  render() {
    const {t} = this.props; 
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label={t('signup_name')} placeholder={t('signup_name')} width='10' onChange={this.onUserChange} />
          <Form.Input fluid label={t('signup_password')} placeholder={t('signup_password')} width='10' type="password" onChange={this.onPasswordChange}/>
          <Form.Input fluid label={t('signup_confirm')} placeholder={t('signup_confirm')} width='10' type="password" onChange={this.onPasswordConfirmation}/>
            <Button className='openButton' type='submit' color='yellow' size='big' disabled={!this.formIsValid()} onClick={() => this.sendCredentials()}>
              {t('signup_button')}
          </Button>
    <h3>{t('signup_message')}<Link to='/login'>{t('signup_login')}</Link></h3>    
        </Form>
      </div>
    )
  }
}

export default withTranslation()(Signup);