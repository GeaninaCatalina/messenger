import React, { Component } from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {Button} from 'semantic-ui-react';

class Login extends Component {
    render() {
      return (
        <div className='AppHeder'>
          <Button className='openButton' color='yellow' size='big'>
            <Link to='/messenger'>Go to messenger</Link>
          </Button>
        </div>
      )
    }
  }
  
export default Login;