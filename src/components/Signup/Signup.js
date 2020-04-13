import React, { Component } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      confirmed: '', 
      disable: 'true'
    }
  }

  async sendCredentials() { 
    if (this.onCheck()) {
      const response = await axios.post("http://localhost:4200/signup", {
        user: this.state.user,
        password: this.state.password
      });
      console.log(response);
    } else {
      alert('Confirmation not valid!')
    }
  }

  onCheck = () => {
    if (this.state.password === this.state.confirmed) {
      this.setState({disable:'false'}); 
      return true;
    } else {
      return false; 
    }
  }


  onUserChange = (e) => {
    this.setState({ user: e.target.value });
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  onPasswordConfirmation = (e) => {
    this.setState({ confirmed: e.target.value });
    this.onCheck();
  }

  render() {
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10' onChange={this.onUserChange} />
          <Form.Input fluid label='Password' placeholder='Password' width='10' type="password" onChange={this.onPasswordChange}/>
          <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' width='10' type="password" onChange={this.onPasswordConfirmation}/>
          <Link to='/'>
            <Button className='openButton' type='submit' color='yellow' size='big' onClick={() => this.sendCredentials()}>
              Go to Login page
          </Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default Signup;