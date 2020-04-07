import React, { Component } from 'react';
import './Messenger.css';
import { Grid, Button } from 'semantic-ui-react';
import UserComponent from './user/UserComponent';
import FeedComponent from './feed/FeedComponent';
import axios from 'axios';

class Messenger extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.getMessages();
  }

  onUserSubmitMessage = (userName, message) => {
    const { messages } = this.state;
    const allignment = userName === 'ck' ? 'left' : 'right';
    messages.push({ userName, message, date: Date.now(), allignment });

    this.setState({ messages });
    this.saveMessages();
  }

  async getMessages() {
    const response = await axios.post("http://localhost:4200/messages", {
      firstUser: 'sneaky',
      secondUser: 'ck'
    });

    this.setState({ messages: response.data });
  }

  saveMessages = async () => {
    await axios.post("http://localhost:4200/messages/save", {
      firstUser: 'sneaky',
      secondUser: 'ck',
      messages: this.state.messages
    }); 
  }

  deleteMessages = async () => {
    await axios.delete("http://localhost:4200/messages", {
      data: {
        firstUser: 'sneaky',
        secondUser: 'ck'
      }
    });

    this.setState({ messages: [] });
  }

  render() {
    return (
      <div className="App">
        <Button color='blue' onClick={this.deleteMessages}>Clear</Button>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column align='center' width={4}>
              <UserComponent userName='ck' onSubmitMessage={this.onUserSubmitMessage} />
            </Grid.Column>
            <Grid.Column className='useForScroll' width={8}>
              <FeedComponent messages={this.state.messages} />
            </Grid.Column>
            <Grid.Column align='center' width={4}>
              <UserComponent userName='sneaky' onSubmitMessage={this.onUserSubmitMessage} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Messenger;
