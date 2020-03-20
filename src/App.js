import React, { Component } from 'react';
import './App.css';
import { Grid, Card, Image, Form, Button, Feed } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputUserOne: '',
      inputUserTwo: '', 
      date: '', 
      messageUserOne: 'Hello there'
    }
  }

 setMessageOne = (e) => { 
 this.setState({inputUserOne: '', 
                messageUserOne: e.target.value});
 console.log(this.state.messageUserOne)
 }   



  render() {
    return (
      <div className="App">
        <h1>Wizzard</h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Card className='card' color='pink'>
                <Image src='https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>User</Card.Header>
                </Card.Content>
              </Card>
              <br></br>
              <Form size='big'>
                <Form.Field>
                  <input placeholder='Add your message here' />
                </Form.Field>
                <Button type='submit' onClick={this.setMessageOne}>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Feed>
                <Feed.Event
                  date={this.date}> 
                  <Card>how are you? 
                  </Card>
                </Feed.Event>
                <div className='feed2'>
                <Feed.Event 
                  Align='right'
                  date={this.date}> 
                  <Card>Good. You? 
                  </Card>
                </Feed.Event>
                </div>
              </Feed>
            </Grid.Column>
            <Grid.Column>
              <Card className='card' color='pink'>
                <Image src='https://cdn.pixabay.com/photo/2015/11/03/10/23/watercolor-1020509_1280.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>User2</Card.Header>
                </Card.Content>
              </Card>
              <br></br>
              <Form size='big'>
                <Form.Field>
                  <input placeholder='Add your message here' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
