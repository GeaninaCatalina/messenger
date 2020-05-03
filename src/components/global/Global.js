import React, { Component, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import './Global.css'
import UserComponent from '../messenger/user/UserComponent';
import FeedComponent from '../messenger/feed/FeedComponent';
import socketIOClient from "socket.io-client";
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';


class Global extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }

  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:4200');
    socket.on('message', (data) => {
      if (data.user !== 'sneaky1') {
        const messages = this.state.messages;
        messages.push(data);
        this.setState({ messages });
      }
    })
    this.getMessages();
  }


  onUserSubmitMessage = async (userName, message) => {
    const { messages } = this.state;

    await axios.post("http://localhost:4200/messages/global", {
      user: userName,
      message: message,
    });

    messages.push({ userName, message, date: Date.now(), allignment: 'left' });
    this.setState({ messages });
  }

  async getMessages() {
    const response = await axios.get("http://localhost:4200/messages/global");

    this.setState({ messages: response.data });
  }

  render() {
    const { t } = this.props;
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