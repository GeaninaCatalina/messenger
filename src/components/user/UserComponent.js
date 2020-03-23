import React, { Component } from 'react';
import { Card, Image, Form, Button, Input } from 'semantic-ui-react';

class UserComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  onInputChange = (e) => {
    this.setState({userInput: e.target.value});
  }

  onSubmit = () => {
    this.props.onSubmitMessage(this.props.userName, this.state.userInput);
    this.setState({userInput: ''});
  }

  render() {
    return (
      <div>
        <Card className='card' color='pink'>
          <Image src={'./' + this.props.userName + '.jpg'} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.userName}.toUpperCase()</Card.Header>
          </Card.Content>
        </Card>
        <br></br>
        <Form size='big'>
          <Form.Field>
            <Input placeholder='Add your message here' onChange={this.onInputChange} value={this.state.userInput}/>
          </Form.Field>
          <Button type='submit' onClick={this.onSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default UserComponent;
