import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import './FeedStyle.css'

class FeedComponent extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    return (
      <Feed>
        {this.props.messages.map((message, index) => {
          return (
            <Feed.Event className='dan' align={message.allignment === 'right' ? 'right' : ''} key={index}>
              <Feed.Label  image={'./' + message.userName + '.jpg'} />
              <Feed.Content>
                <Feed.Date content={message.userName + ' ' + new Date(message.date).toLocaleString()} />
                <Feed.Extra text content={message.message} />
              </Feed.Content>
            </Feed.Event>
          )
        })}
      </Feed>
    );
  }
}

export default FeedComponent;
