import React, { Component } from 'react';
import { Feed, Image, } from 'semantic-ui-react';
import './FeedStyle.css'

class FeedComponent extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    return (
      <div className='feedFlex'>
        {this.props.messages.map((message, index) => {
          return (
            <Feed.Event className={message.allignment === 'right' ? 'feedRight' : 'feedLeft'} key={index}>
                <Image src={'./' + message.userName + '.jpg'} avatar />
              {/* <Feed.Label  image={'./' + message.userName + '.jpg'} /> */}
              <Feed.Content>
                <Feed.Date content={message.userName + ' ' + new Date(message.date).toLocaleString()} />
                <Feed.Extra text content={message.message} />
              </Feed.Content>
            </Feed.Event>
          )
        })}
      </div>
    );
  }
}

export default FeedComponent;
