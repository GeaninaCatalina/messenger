import React, { Component } from 'react';
import './App.css';
import { Grid, Card } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wizzard</h1>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Card>User1</Card>
            </Grid.Column>
            <Grid.Column>
              <h1>Here are your message</h1>
            </Grid.Column>
            <Grid.Column>
              <Card>User1</Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
