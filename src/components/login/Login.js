import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: '', 
      password: ''
    }
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
      this.props.history.push('/messenger');
    } else {
      alert ('Wrong User name or password!')
    }

    console.log(response.data);
  
  }

  render() {
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10' onChange={this.onUserChange} />
          <Form.Input fluid label='Password' placeholder='Password' width='10' type="password" onChange={this.onPasswordChange}/>
            <Button className='openButton' type='submit' color='yellow' size='big' onClick={() => this.sendCredentials()}>
              Go to messenger
          </Button>
          <h3>You don't have an accont yet? <Link to='/signup'>Sign up!</Link></h3>
        </Form>
      </div>
    )
  }
}

export default Login;