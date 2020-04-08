import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';

class Login extends Component {
  render() {
    return (
      <div>
        <Form size='big' className='openPage'>
          <Form.Input fluid label='Name' placeholder='Name' width='10'/>
          <Form.Input fluid label='Password' placeholder='Password' width='10'/>
          <Button className='openButton' color='yellow' size='big'>
          <Link to='/messenger'>Go to messenger</Link>
        </Button>
        </Form>
   </div>
    )
  }
}

export default Login;