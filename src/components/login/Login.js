import React, { Component } from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class Login extends Component {

constructor(props) {
  super(props);

  this.state = {
    user: "",
    password: "",
    loginErrors: ""
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleSubmit(event) {
  const { name, password } = this.state;

  axios
    .post(
      "http://localhost:3000/",
      {
        user: {
          name: name,
          password: password
        }
      },
      { withCredentials: true }
    )
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error => {
      console.log("login error", error);
    });
  event.preventDefault();
}

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