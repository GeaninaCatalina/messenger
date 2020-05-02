import React, { Component, useEffect  } from 'react'; 
import {Grid} from 'semantic-ui-react'; 
import  './Global.css'
import UserComponent from '../messenger/user/UserComponent'; 
import FeedComponent from '../messenger/feed/FeedComponent';
import socketIOClient from "socket.io-client";
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n'; 
const socket = socketIOClient('http://localhost:4200');

function subcribeToSocket() {
  console.log('subscribing')
  socket.emit('testing-connection', 'Test')

  socket.on('new-global-message', data => {
    console.log('msg received')
    if (data.user !== 'sneaky2') {
      console.log('msg received')
      this.state.messages.push({user: data.user, message: data.message, date: Date.now(), allignment: 'right'});
    }
  });
}

class Global extends Component {
  constructor(){
    super(); 
    this.state={
      messages: [] 
    }
    subcribeToSocket();
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  componentDidMount() {
    this.getMessages();
  }

  onUserSubmitMessage = async (userName, message) => {
    const { messages } = this.state;
    
    await axios.post("http://localhost:4200/messages/global", {
      user: 'sneaky',
      message: 'Test message'
    });
    
    messages.push({ userName, message, date: Date.now(), allignment: 'left' });

    this.setState({ messages });
  }

  async getMessages() {
    const response = await axios.get("http://localhost:4200/messages/global");

    this.setState({ messages: response.data });
  }

  render() {
    
    const {t} = this.props; 
    return (
      <div>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column align='center' width={4}>
              <UserComponent userName='ck' onSubmitMessage={this.onUserSubmitMessage} />
            </Grid.Column>
            <Grid.Column className='useForScroll' width={8}>
              <FeedComponent messages={this.state.messages} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }

} 
export default withTranslation()(Global); 