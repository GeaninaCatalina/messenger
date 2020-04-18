import React, { Component } from 'react';
import './Signup.css';
import { Button, Form } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      confirmed: ''
    }
  }

  async sendCredentials() { 
      const response = await axios.post('http://localhost:4200/signup', {
        user: this.state.user,
        password: this.state.password
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
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10' onChange={this.onUserChange} />
          <Form.Input fluid label='Password' placeholder='Password' width='10' type="password" onChange={this.onPasswordChange}/>
          <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' width='10' type="password" onChange={this.onPasswordConfirmation}/>
            <Button className='openButton' type='submit' color='yellow' size='big' disabled={!this.formIsValid()} onClick={() => this.sendCredentials()}>
              Create account
          </Button>
          <h3>You already have an accont? <Link to='/login'>Login!</Link></h3>    
        </Form>
      </div>
    )
  }
}

export default Signup;