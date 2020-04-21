import React, { Component } from 'react';
import { Card, Image, Form, Button, Input } from 'semantic-ui-react';
import './UserStyle.css'; 
import { withTranslation } from 'react-i18next';
import i18n from '../../../i18n';

class UserComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  onInputChange = (e) => {
    this.setState({userInput: e.target.value});
  }

  onSubmit = () => { 
    if (this.state.userInput !== '') {
    this.props.onSubmitMessage(this.props.userName, this.state.userInput);
    this.setState({userInput: ''});
    }
  }

  render() {
    const {t} = this.props; 
    return (
      <div>       
        <Card className='mainCard' color='pink'>
          <Image src={'./' + this.props.userName + '.jpg'} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.userName.toUpperCase()}</Card.Header>
          </Card.Content>
        </Card>
        <br></br>
        <Form size='big'>
          <Form.Field>
            <br></br>
            <Input placeholder={t('submit_placeholder')} onChange={this.onInputChange} value={this.state.userInput}/>
          </Form.Field>
         <Button type='submit'color='blue' onClick={this.onSubmit}>{t('submit')}</Button>
        </Form>
      </div>
    );
  }
}

export default withTranslation()(UserComponent);
