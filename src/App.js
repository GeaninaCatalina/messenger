import React, { Component } from 'react';
import './App.css';
import { Grid, Card, Image } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wizzard</h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column centered={true}>
            <Card> <Image src='https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>User</Card.Header>
              </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column centered={true}>
              <h2>Here are your messages</h2>
            </Grid.Column>
            <Grid.Column Align='right' >
            <Card> <Image src='https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_1280.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>User2</Card.Header>
              </Card.Content>
            </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
