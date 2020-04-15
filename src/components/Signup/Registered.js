import React, { Component } from 'react';
import './Registred.css'
import { Message} from 'semantic-ui-react';


class Registred extends Component {
  render() {
    return (
      <div className='messages'>
        <Message
          compact='true'
          align='center'
          header='Your user registration was successful'
          content='You may now log-in with the username you have chosen'
        />
      </div>
    )
  }
}

export default Registred;