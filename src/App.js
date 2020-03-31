import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import UserComponent from './components/user/UserComponent';
import FeedComponent from './components/feed/FeedComponent';
import axios from 'axios';


class App extends Component {
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
    const {messages} = this.state;
    const allignment = userName === 'ck' ? 'left' : 'right';
    messages.push({userName, message, date: Date.now(), allignment})

    this.setState({messages});

    this.saveMessages();
  }

  async getMessages() {
    const response = await axios.post("http://localhost:4200/messages", {
      firstUser: 'sneaky',
      secondUser: 'ck'
    });

    this.setState({messages: response.data});
  }

  saveMessages = async () => {
    await axios.post("http://localhost:4200/messages/save", {
      firstUser: 'sneaky',
      secondUser: 'ck',
      messages: this.state.messages
    });
  } 

 
  render() {
    return (
      <div className="App">
        <h1 className='elegantshadow'>Read my messages</h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column align='center' width={4}>
              <UserComponent userName='ck' onSubmitMessage={this.onUserSubmitMessage}/>
            </Grid.Column>
            <Grid.Column width={7}>
              <FeedComponent messages={this.state.messages}/>
            </Grid.Column>
            <Grid.Column align='center' width={4}>
              <UserComponent userName='sneaky' onSubmitMessage={this.onUserSubmitMessage}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
