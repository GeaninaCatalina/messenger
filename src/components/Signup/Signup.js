import React, { Component } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';

class Signup extends Component {

  constructor() {
    super();
    this.state = {
      user: '', 
      password: '',
      confirmed: ''
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
  }

  render() {
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10' onChange={this.onUserChange} />
          <Form.Input fluid label='Password' placeholder='Password' width='10' type="password" onChange={this.onPasswordChange}/>
          <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' width='10' type="password" onChange={this.onPasswordConfirmation}/>
          <Link to='/'>
            <Button className='openButton' type='submit' color='yellow' size='big'>
              Go to Login page
          </Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default Signup;