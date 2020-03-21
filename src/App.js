import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import UserComponent from './components/user/UserComponent';
import FeedComponent from './components/feed/FeedComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  onUserSubmitMessage = (userName, message) => {
    const {messages} = this.state;
    const allignment = userName === 'ck' ? 'left' : 'right';
    messages.push({userName, message, date: Date.now(), allignment})

    this.setState({messages});
  }

  render() {
    return (
      <div className="App">
        <h1>Wizzard</h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <UserComponent userName='ck' onSubmitMessage={this.onUserSubmitMessage}/>
            </Grid.Column>
            <Grid.Column>
              <FeedComponent messages={this.state.messages}/>
            </Grid.Column>
            <Grid.Column>
              <UserComponent userName='sneaky' onSubmitMessage={this.onUserSubmitMessage}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
