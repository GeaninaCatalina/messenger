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
      password: '',
      shownPassword :''
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

  encryptPassword = () => {
    this.onPasswordChange(); 
    this.setState ({shownPassword:'*'.repeat(this.state.password)});
  }

  async sendCredentials() {
    const response = await axios.post("http://localhost:4200/login", {
      user: this.state.user,
      password: this.state.pass
    });

    if (response === true) {
      // navigate
    } else {
      // show error
    }

    console.log(response);
  }

  render() {
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10' onChange={this.onUserChange} />
          <Form.Input fluid label='Password' placeholder='Password' width='10' type="password" onChange={this.onPasswordChange}/>
          <Link to='/messenger'>
            <Button className='openButton' type='submit' color='yellow' size='big' onClick={() => this.sendCredentials()}>
              Go to messenger
          </Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default Login;